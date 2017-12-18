import React from 'react'
import { Text } from '../'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './status.css'

const Status = ({ sumPlayer, sumAi }) => (
  <Text>{sumPlayer > sumAi && sumPlayer <= 21 ? 'Player Wins' : 'Dealer Wins'}</Text>
)

Status.propTypes = {
  sumPlayer: PropTypes.number.isRequired,
  sumAi: PropTypes.number.isRequired,
}

export default Status
