import React, { createContext, useState } from 'react'
export const Context = createContext()
// tecnica de render prop
const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  // este el prop
  const value = {
    isAuth,
    activateAuth: (token) => {
      console.log(token)
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    }
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
export default {
  Provider,
  Consumer: Context.Consumer
}
