import React from 'react'
import { List, Item } from './styles'
import { PhotoCard } from '../PhotoCard/index'

// permite envolver el componennte , se llama componente de orden superior funcion como parametro
export const ListOfPhotoCardsComponent = ({ data }) => {
  console.log(data)
  return (
    <List>
      {data.photos.map((photo) => (<Item key={photo.id}><PhotoCard {...photo} /></Item>

      ))}
    </List>
  )
}
