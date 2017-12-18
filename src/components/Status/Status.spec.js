import React from 'react'
import Status from './Status'
import renderer from 'react-test-renderer'

describe('<Status />', () => {
  it('should render proper markup', (): void => {
    const props = {
      isGameOver: true,
      sumAi: 1,
      sumPlayer: 22,
      winner: 'Player',
    }
    const tree = renderer.create(<Status {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
