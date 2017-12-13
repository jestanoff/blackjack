import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Text } from '../'
import './app.css'

function App() {
  return (
    <div className="app">
      <Button>Primary2</Button>
      <Button color="tertiary">Secondary button</Button>
      <Card suit="club" value="jack" />
      <Text>Hello world!</Text>
      <Text size="huge">Hello world!</Text>
    </div>
  )
}

export default App
