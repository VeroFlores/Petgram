import React from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { List } from './styles'
// permite envolver el componennte , se llama componente de orden superior funcion como parametro
export const ListOfPhotoCardsComponent = ({ data }) => {
  return (
    <List>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </List>
  )
}

