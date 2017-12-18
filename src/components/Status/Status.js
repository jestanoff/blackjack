import React from 'react'
import { Text } from '../'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './status.css'

const Status = ({ isGameOver, sumPlayer, sumAi, winner }) => (
  <Text>{isGameOver && `winner is ${winner}`}</Text>
)

Status.propTypes = {
  isGameOver: PropTypes.bool.isRequired,
  sumPlayer: PropTypes.number.isRequired,
  sumAi: PropTypes.number.isRequired,
  winner: PropTypes.string.isRequired,
}

export default Status
