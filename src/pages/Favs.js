import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout/index'

export default () => {
  return (
    <>
      <Layout title='Tus favoritos' subtitle='con Petgram puedes encontrar fotos de animales domésticos y darles like'>
        <FavsWithQuery />
      </Layout>

    </>
  )
}
