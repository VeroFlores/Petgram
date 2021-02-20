/* eslint-disable react/jsx-handler-names */
import React from 'react'
import { Form, Input, Title, Error } from './styles'
import { SubmitForm } from '../SubmitButton/index'
// se importa custom hooks
import { useInputValue } from '../../hooks/useInputValue'
export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }
  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        {/* value={email.value} onChange={email.onChange */}
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <SubmitForm disabled={disabled}>{title}</SubmitForm>
      </Form>
      {error && <Error>{error}</Error>}
    </>

  )
}
