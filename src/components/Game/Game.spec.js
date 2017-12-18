import React from 'react'
import Game from './Game'
import { shallow } from 'enzyme'

// NOTE: I cannot use enzyme with React 1.6 and Create React App as I need to setup tests and add an adaptor, but Jest doesn't accept my configurating in package.json. Also doing it with snapshots doesn't work as of random cards every time
describe.skip('<Game />', () => {
  it('should render proper markup', () => {
    const wrapper = shallow(<Game />)

    expect(wrapper.find('board')).toBeDefined()
  })
})
