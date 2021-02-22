import React from 'react'
import { useQuery } from '@apollo/client'
import { List, Item } from './styles'
import { withPhotos } from '../../hoc/withPhotos'
import { PhotoCard } from '../PhotoCard/index'

// permite envolver el componennte , se llama componente de orden superior funcion como parametro
export const ListOfPhotoCardsComponent = ({ categoryId }) => {
  const { loading, error, data } = useQuery(withPhotos, { variables: { categoryId } })
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading</h2>
  }
  console.log(data)
  return (
    <List>
      {data.photos.map((photo) => (<Item key={photo.id}><PhotoCard {...photo} /></Item>
      ))}
    </List>
  )
}
