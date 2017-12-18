import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './button.css'

const Button = ({ color, children, handleClick }) => (
  <button
    className={cx({
      button: true,
      [`button-color-${color}`]: true,
    })}
    onClick={handleClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'tertiary', 'warning']).isRequired,
  children: PropTypes.node,
}

Button.defaultProps = {
  color: 'primary',
}

export default Button
