import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout/index'

export default () => {
  return (
    <Layout title='Favoritos'>
      <FavsWithQuery />
    </Layout>

  )
}
