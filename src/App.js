import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'
import {
  GlobalStyle
} from './styles/GlobalStyles'
import { Logo } from './components/Logo/index'
import { ListOfPhotoCards } from './components/ListOfPhotoCard/index'
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>

  )
}
export default App
