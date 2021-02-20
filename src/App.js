import React, { useContext } from 'react'
// determinar rutas de las aplicación
import { Router, Redirect } from '@reach/router'
// nos dará consumer
import { Context } from './Context'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo/index'
import { NavBar } from './components/NavBar/index'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

const App = () => {
  // obtenemos query string
  // detectar la ruta en la que estamos

  // Queremos ver el Id de cada una de las fotos
  // const UserLogged = ({ children }) => {
  //   return children({ isAuth: false })
  const { isAuth } = useContext(Context)
  // }
  return (
    <div>

      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {/* si no es Auth se carga la pagina notRegistered */}
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='favs' />
        <User path='user' />
      </Router>
      {/* cosumer nos yudaba saber si el usuario está auenticado */}

      <NavBar />
    </div>
  )
}
export default App
