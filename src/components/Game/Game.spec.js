import React from 'react'
import Game from './Game'
import { shallow } from 'enzyme'

describe.skip('<Game />', () => {
  it('should render proper markup', () => {
    const wrapper = shallow(<Game />)

    expect(wrapper.find('board')).toBeDefined()
  })
})
