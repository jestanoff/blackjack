import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './card.css'

const Card = ({ suit, value }) => {
  return (
    <div
      className={cx({
        card: true,
        [`card-suit-${suit}`]: true,
        [`card-value-${value}`]: true,
      })}
    />
  )
}

Card.propTypes = {
  suit: PropTypes.oneOf(['diamond', 'spade', 'heart', 'club']).isRequired,
  value: PropTypes.oneOf(['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'])
    .isRequired,
}

export default Card
