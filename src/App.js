import React from 'react'
// determinar rutas de las aplicación
import { Router } from '@reach/router'
import Context from './Context'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo/index'
import { NavBar } from './components/NavBar/index'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

const App = () => {
  // obtenemos query string
  // detectar la ruta en la que estamos

  // Queremos ver el Id de cada una de las fotos
  const UserLogged = ({ children }) => {
    return children({ isAuth: false })
  }
  return (
    <div>
      <Logo />
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:id' />
      </Router>

      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router><Favs path='favs' /><User path='user' /></Router>
              : <Router><NotRegisteredUser path='favs' /><NotRegisteredUser path='user' /></Router>

        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
export default App
