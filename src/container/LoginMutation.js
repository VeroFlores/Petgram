import React from 'react'
// import { useMutation } from '@apollo/react-hooks'
// // import { Mutation } from '@apollo/client/react/components'
import { gql } from '@apollo/client'
import { Mutation } from '@apollo/client/react/components'
// USERCRDETIAL ES un js token
const LOGIN = gql`
mutation login ($input: UserCredentials!) {
    login (input: $input)
}
`
export const LoginMutation = ({ children }) => {
  return (
    <Mutation mutation={LOGIN}>
      {children}
    </Mutation>
  )
}
