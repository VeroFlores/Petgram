import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout/index'
export const Home = ({ id }) => {
  console.log('home')
  return (
    <Layout title='Tu app de Fotos' subtitle='con Petgram puedes encontrar fotos de animales domésticos y darles like'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}
