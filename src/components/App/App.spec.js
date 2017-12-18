import React from 'react'
import App from './App'
import renderer from 'react-test-renderer'

describe.skip('<App />', () => {
  it('should render proper markup', (): void => {
    const tree = renderer.create(<App />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
