import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import Context from './Context'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-api-vero-q6vytm0u1.vercel.app/graphql'
})
const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  onError: ({ networkError }) => {
    if (networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/user'
    }
  },
  cache: new InMemoryCache()
})

ReactDOM.render(
  // obtenemos la info de si el usuario esta eutenticado
  // context ofrece 2 componentest y uno de ellos es provider
  //, value que estara disponible en todo el arbol
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />,
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
