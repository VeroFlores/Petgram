import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Context from './Context'
const client = new ApolloClient({
  uri: 'https://petgram-server-api-vero-q6vytm0u1.vercel.app/graphql',
  cache: new InMemoryCache()
})
ReactDOM.render(
  // obtenemos la info de si el usuario esta eutenticado
  <Context.Provider value={{ isAuth: false }}>
    <ApolloProvider client={client}>
      <App />,
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
