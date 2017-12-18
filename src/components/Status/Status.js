import React from 'react'
import { Text } from '../'
import PropTypes from 'prop-types'
import './status.css'

const Status = ({ isGameOver, sumPlayer, sumAi, winner }) => (
  <Text>{isGameOver ? `The winner is ${winner}` : 'Press Hit or Stick buttons to play'}</Text>
)

Status.propTypes = {
  isGameOver: PropTypes.bool.isRequired,
  sumPlayer: PropTypes.number.isRequired,
  sumAi: PropTypes.number.isRequired,
  winner: PropTypes.string,
}

export default Status
