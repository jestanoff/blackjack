import React from 'react'
import { Game, Text } from '../'
import './app.css'

const App = () => (
  <div className="app">
    <Text color="white" size="huge">
      Lystable Blackjack
    </Text>
    <Game />
  </div>
)

export default App
