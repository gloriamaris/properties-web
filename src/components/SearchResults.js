import React, { Component } from 'react'

class SearchResults extends Component {
  render () {
    const { results } = this.props

    return (
      <div>
        Results go here
        <br/>
        <br/>
        <br/>
        <pre>
          {JSON.stringify(results)}
        </pre>
      </div>
    )
  }
}

export default SearchResults
