import * as utils from './'

describe('getRandomCard', () => {
  it('should return a random card with two properties, suit and value', () => {
    const card = utils.getRandomCard()

    expect(card.value).toBeDefined()
    expect(card.suit).toBeDefined()
    expect(Object.keys(card)).toHaveLength(2)
  })
})

describe('isCardInDeck', () => {
  it('should return deck true if card is in deck', () => {
    const deck = utils.getFullDeck()
    const card = utils.getRandomCard()
    const filteredDeck = utils.isCardInDeck(card, deck)

    expect(filteredDeck).toBe(true)
  })

  it('should return deck false if card is in deck', () => {
    const deck = [
      {
        suit: 'diamond',
        value: 'K',
      },
    ]
    const card = {
      suit: 'heart',
      value: 'K',
    }
    const filteredDeck = utils.isCardInDeck(card, deck)

    expect(filteredDeck).toBe(false)
  })
})

describe('getUniqueCard', () => {
  it('should always return a random card from the deck', () => {
    const deckStatus = [
      {
        suit: 'diamond',
        value: 'K',
      },
    ]
    const uniqueCard = utils.getUniqueCard(deckStatus)

    expect(uniqueCard.suit).toEqual(deckStatus[0].suit)
    expect(uniqueCard.value).toEqual(deckStatus[0].value)
  })
})

describe('sumCards', () => {
  it('should properly sum the cards', () => {
    const cards = [
      {
        suit: 'diamond',
        value: 'K',
      },
      {
        suit: 'heart',
        value: '2',
      },
      {
        suit: 'heart',
        value: 'A',
      },
    ]

    expect(utils.sumCards(cards)).toEqual(23)
  })
})
