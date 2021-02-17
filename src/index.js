import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Context from './Context'
const client = new ApolloClient({
  uri: 'https://petgram-server-api-vero-q6vytm0u1.vercel.app/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: ({ networkError }) => {
    if (networkError.result.code === 'invalid_token') {
      window.localStorage.removeItem('token')
      window.location.href = '/'
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
