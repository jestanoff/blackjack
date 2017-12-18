import React from 'react'
import Game from './Game'
import renderer from 'react-test-renderer'

describe('<Game />', () => {
  it('should render proper markup', () => {
    const tree = renderer.create(<Game />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
