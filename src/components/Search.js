import React, { Component } from 'react'
import SearchResults from './SearchResults'

class Search extends Component {
  state = () => ({
    keyword: null,
    results: []
  })

  // sets the state for any changes in input
  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  // handles event when submit button is clicked
  handleSubmit = (value) => {
    console.log('ang value kay')
    console.log(this.state)

    // call from graphql endpoint to fetch listings
    let listings = [
      {
        "__typename": "User",
        "id": "089da2e0-2dce-4580-8a5e-ae551c1dac88",
        "firstName": "Gina",
        "lastName": "Vickery",
        "properties": [
          {
            "id": "2f0e9fef-24db-44aa-88ef-b97673349eb2",
            "city": "Irvine",
            "state": "CA"
          }
        ]
      }
    ]

    this.setState({
      results: listings
    })
  }

  // checks if Enter key is pressed
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit(event)
    }
  }

  render () {
    const { results } = this.state

    return (
      <div>
        <input type='text' name='keyword' placeholder='Enter propery or user name' onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
        <input type='button' name='submit' value='submit' onClick={this.handleSubmit}/>

        <SearchResults results={results}/>
      </div>
    )
  }
}

export default Search
