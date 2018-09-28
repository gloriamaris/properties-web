import React, { Component } from 'react'

// import Graphql Apollo packages
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// import components
import Search from './components/Search'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

class App extends Component {
  render () {
    return (
      <div className='App'>
        <ApolloProvider client={client}>
          <Search />
        </ApolloProvider>
      </div>
    )
  }
}

export default App
