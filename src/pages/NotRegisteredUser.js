import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <>
      <RegisterMutation>
        {/* le tenemos que pasar un children que su vez es una función */}
        {(register, { data = {}, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
          }
          const errorMsg = error && 'El usuario existe y hay algún problema'
          return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              console.log(data)
              const { login } = data
              activateAuth(login)
            })
          }
          const errorMsg = error && 'La contraseña no es correcta o el usuario no existe'
          return <UserForm disabled={loading} error={errorMsg} title='Iniciar sesión' onSubmit={onSubmit} />
        }}
      </LoginMutation>

    </>

  )
}
