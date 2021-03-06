import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './text.css'

function Text({ color, size, children }) {
  return (
    <h1
      className={cx({
        text: true,
        [`text-color-${color}`]: true,
        [`text-size-${size}`]: true,
      })}
    >
      {children}
    </h1>
  )
}

Text.propTypes = {
  color: PropTypes.oneOf(['white', 'dark-grey']).isRequired,
  size: PropTypes.oneOf(['meta', 'standard', 'large', 'huge']).isRequired,
  children: PropTypes.node,
}

Text.defaultProps = {
  color: 'dark-grey',
  size: 'standard',
}

export default Text
