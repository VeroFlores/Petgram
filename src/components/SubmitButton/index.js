import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styles'
export const SubmitForm = ({ children, disabled, onClick }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>{children}</Button>
  )
}
SubmitForm.proptTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
