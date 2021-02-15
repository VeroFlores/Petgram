import React from 'react'
import { PhotoCard } from '../components/PhotoCard/index'
import { gql } from '@apollo/client'
import { Query } from '@apollo/client/react/components'
// es buena práctica usar mayusculas a los queries de grapql
const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! ⛔</p>
  return <PhotoCard {...data.photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)
