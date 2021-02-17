import React from 'react'
import { gql } from '@apollo/client'
import { Mutation } from '@apollo/client/react/components'
const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`
// este componente envuelve children y permite hacer esta mutacion en cualquier componenete
export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {children}
    </Mutation>
  )
}
