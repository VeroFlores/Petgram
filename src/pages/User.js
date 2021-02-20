import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitForm } from '../components/SubmitButton/index'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>User</h1>
      <SubmitForm onClick={removeAuth}>Cerrar sesión</SubmitForm>
    </>

  )
}
