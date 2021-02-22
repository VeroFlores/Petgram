import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCard'
import { Layout } from '../components/Layout/index'
const HomePage = ({ id }) => {
  return (
    <Layout title='Tu app de Fotos' subtitle='con Petgram puedes encontrar fotos de animales domésticos y darles like'>
      <ListOfCategories />
      <ListOfPhotoCardsComponent categoryId={id} />
    </Layout>
  )
}
// usar react memo evita que se re renderiza un componente que no es necesario renderizar
// usando polifill de los tools es posible los componentes renderizados
export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
