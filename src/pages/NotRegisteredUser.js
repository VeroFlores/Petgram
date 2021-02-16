import React from 'react'
import Context from '../Context'
export const NotRegisteredUser = () => {
  return (
    // consumir los datos del context,
    // renderizamos una fucion
    <Context.Consumer>
      {
({ activateAuth }) => {
  return (
    <form onSubmit={activateAuth}>
      <button>Iniciar sesion</button>
    </form>
  )
}
      }
    </Context.Consumer>

  )
}
