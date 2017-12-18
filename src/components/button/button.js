import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './button.css'

const Button = ({ color, children, disabled, handleClick }) => (
  <button
    className={cx({
      button: true,
      [`button-color-${color}`]: true,
    })}
    disabled={disabled}
    onClick={handleClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'tertiary', 'warning']).isRequired,
  children: PropTypes.node,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  color: 'primary',
  disabled: false,
}

export default Button
