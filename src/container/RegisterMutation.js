import React from 'react'
// import { useMutation } from '@apollo/react-hooks'
// // import { Mutation } from '@apollo/client/react/components'
import { gql } from '@apollo/client'
import { Mutation } from '@apollo/client/react/components'
// USERCRDETIAL ES un js token
const REGISTER = gql`
mutation signup ($input: UserCredentials!) {
    signup (input: $input)
}
`
export const RegisterMutation = ({ children }) => {
  return (
    <Mutation mutation={REGISTER}>
      {children}
    </Mutation>
  )
}
