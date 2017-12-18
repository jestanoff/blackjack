import { cards, cardValues, suites } from '../constants'

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomCard = () => ({
  suit: suites[getRandomIntInclusive(0, suites.length - 1)],
  value: cards[getRandomIntInclusive(0, cards.length - 1)],
})

export const isCardInDeck = (card, deck) =>
  deck.some(elm => card.value !== elm.value && card.suit !== elm.suit)

export const getUniqueCard = deck => deck[getRandomIntInclusive(0, deck.length - 1)]

export const removeCardFromDeck = (card, deck) =>
  deck.filter(elm => card.suit !== elm.suit || card.value !== elm.value)

export const getFullDeck = () =>
  cards.reduce(
    (accu, value) => [
      ...accu,
      ...suites.map(suit => ({
        suit,
        value,
      })),
    ],
    [],
  )

export const sumCards = cards => cards.reduce((accu, card) => accu + cardValues[card.value], 0)
