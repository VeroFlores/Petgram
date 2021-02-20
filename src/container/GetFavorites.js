import React from 'react'
import { gql } from '@apollo/client'
import { Query } from '@apollo/client/react/components'
import { ListOfFavs } from '../components/ListOfFavs/index'
const GET_FAVORITES = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`
const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>
  const { favs } = data
  return <ListOfFavs favs={favs} />
}
export const FavsWithQuery = () => (
  <Query query={GET_FAVORITES}>
    {renderProp}
  </Query>
)
