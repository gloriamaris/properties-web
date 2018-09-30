import React, { Component } from 'react'

// import components
import Home from './components/Home'
import Header from './components/Header'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}

export default App
