import React, { Component } from 'react'

class SearchResults extends Component {
  render () {
    const { results } = this.props
    console.log(results)

    return (
      <div>
        Results go here
        <br />
        <br />
        <br />
        
      </div>
    )
  }
}

export default SearchResults
