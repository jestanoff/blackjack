import React, { Component } from 'react'
import { Button, Card, Status } from '../'
import {
  getFullDeck,
  getRandomCard,
  getUniqueCard,
  getWinner,
  removeCardFromDeck,
  sumCards,
} from '../../utils'
import './game.css'

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = this.getInitialState()
  }

  getInitialState = () => {
    let deckStatus = getFullDeck()
    const firstPlayerCard = getRandomCard()
    deckStatus = removeCardFromDeck(firstPlayerCard, deckStatus)
    const secondPlayerCard = getUniqueCard(deckStatus)
    deckStatus = removeCardFromDeck(secondPlayerCard, deckStatus)
    const firstAiCard = getUniqueCard(deckStatus)

    return {
      deckStatus,
      aiCards: [firstAiCard],
      playerCards: [firstPlayerCard, secondPlayerCard],
      isGameOver: false,
      winner: null,
    }
  }

  dealAiCard = event => {
    event.preventDefault()
    let { aiCards, deckStatus, playerCards } = this.state
    let card = getUniqueCard(deckStatus)
    deckStatus = removeCardFromDeck(card, deckStatus)
    aiCards = [...aiCards, card]

    while (sumCards(aiCards) < 20) {
      card = getUniqueCard(deckStatus)
      deckStatus = removeCardFromDeck(card, deckStatus)
      aiCards = [...aiCards, card]
    }

    const isGameOver = true
    const winner = getWinner(playerCards, aiCards)

    this.setState({
      aiCards,
      deckStatus,
      isGameOver,
      winner,
    })
  }

  dealPlayerCard = event => {
    event.preventDefault()
    let { deckStatus, playerCards } = this.state
    let isGameOver, winner
    const card = getUniqueCard(deckStatus)
    deckStatus = removeCardFromDeck(card, deckStatus)
    playerCards = [...playerCards, card]
    if (sumCards(playerCards) > 21) {
      isGameOver = true
      winner = 'Dealer'
    }

    this.setState({
      deckStatus,
      playerCards,
      isGameOver,
      winner,
    })
  }

  handleResetGame = event => {
    event.preventDefault()
    const state = this.getInitialState()
    this.setState(state)
  }

  render() {
    const { aiCards, isGameOver, playerCards, winner } = this.state
    const sumPlayer = sumCards(playerCards)
    const sumAi = sumCards(aiCards)

    return (
      <section className="board">
        <section className="board--cards">
          <div className="board--ai-cards">
            <div>
              <h2>Dealer cards</h2>
              <p>sum {sumAi}</p>
            </div>
            {aiCards.map(({ suit, value }) => (
              <Card key={`${value}-${suit}`} suit={suit} value={value} />
            ))}
          </div>
          <div className="board--player-cards">
            <div>
              <h2>Player cards</h2>
              <p>sum {sumPlayer}</p>
            </div>
            {playerCards.map(({ suit, value }) => (
              <Card key={`${value}-${suit}`} suit={suit} value={value} />
            ))}
          </div>
        </section>
        <section className="board--controls">
          <Status isGameOver={isGameOver} sumPlayer={sumPlayer} sumAi={sumAi} winner={winner} />
          <hr className="board--controls-hr" />
          <Button disabled={isGameOver} handleClick={this.dealPlayerCard} color="tertiary">
            Hit
          </Button>
          <Button color="primary" disabled={isGameOver} handleClick={this.dealAiCard}>
            Stick
          </Button>
          <hr className="board--controls-hr" />
          <Button color="warning" handleClick={this.handleResetGame}>
            Reset
          </Button>
        </section>
      </section>
    )
  }
}

export default Game
