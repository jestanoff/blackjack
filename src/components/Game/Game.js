import React, { Component } from 'react'
import { Button, Card, Status, Text } from '../'
import {
  getFullDeck,
  getRandomCard,
  getUniqueCard,
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
      playerCards: [firstPlayerCard, secondPlayerCard],
      aiCards: [firstAiCard],
    }
  }

  dealCard = event => {
    event.preventDefault()
  }

  handleResetGame = event => {
    event.preventDefault()
    const state = this.getInitialState()
    this.setState(state)
  }

  render() {
    const { aiCards, playerCards } = this.state
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
          <Status sumPlayer={sumPlayer} sumAi={sumAi} />
          <hr className="board--controls-hr" />
          <Button handleClick={this.dealCard} color="tertiary">
            Hit
          </Button>
          <Button color="primary">Stick</Button>
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
