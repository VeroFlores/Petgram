import React from 'react'
// determinar rutas de las aplicación
import { Router } from '@reach/router'

import {
  GlobalStyle
} from './styles/GlobalStyles'
import { Logo } from './components/Logo/index'
import { Home } from './pages/Home'

import { PhotoCardWithQuery } from './container/photoCardWithQuery'
const App = () => {
  // obtenemos query string
  // detectar la ruta en la que estamos
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  // Queremos ver el Id de cada una de las fotos
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Router><Home path='/' /><Home path='/pet/:id' /></Router>

      }
    </div>

  )
}
export default App
