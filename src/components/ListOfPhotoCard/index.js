import React from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { List } from './styles'
// permite envolver el componennte , se llama componente de orden superior funcion como parametro
// const withPhotos = gql`
//   query getPhotos ($categoryId: ID){
//     photos (categoryId: $categoryId){
//       id
//       categoryId
//       src
//       likes
//       userId
//       liked
//     }
//   }
// `
// console.log(withPhotos)
export const ListOfPhotoCardsComponent = ({ data }) => {
  return (
    <List>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </List>
  )
}
