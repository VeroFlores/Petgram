import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Helmet } from 'react-helmet'

export const Favs = () => {
  return (
    <>
      <Helmet>
        <title>Petgram-Tu app de mascotas</title>
        <meta name='description' content='con Petgram puedes encontrar fotos de animales domésticos y darles like' />
      </Helmet>
      <h1>Favs</h1>
      <FavsWithQuery />
    </>
  )
}
