import React, { createContext, useState } from 'react'
const Context = createContext()
// tecnica de render prop
const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  // este el prop
  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
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
