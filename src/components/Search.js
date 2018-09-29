/**
 * Search component - main section
 *
 * @author monique <monique.dingding@gmail.com>
 * Sept 29, 2018
 */

import React, { Component } from 'react'
import SearchResults from './SearchResults'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

class Search extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      keyword: null
    }
  }

  // sets the state for any changes in input
  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  // handles event when submit button is clicked
  handleSubmit = (event) => {
    const { keyword } = this.state
    this.displaySearchResults({ keyword })
  }

  // checks if Enter key is pressed
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit(event)
    }
  }

  // fetch listings from graphql endpoint and loads the results
  // via loading SearchResults component
  displaySearchResults = () => {
    const { keyword } = this.state

    const GET_LISTINGS_QUERY = gql`
      {
        search(keyword: "${keyword}") {
          __typename
            ... on Property {
              id,
              city,
              state
            }
            ... on User {
              id
              firstName
              lastName
              properties {
                id,
                city,
                state
              }
            }
        }
      }`

    if (keyword) {
      return (
        <Query query={ GET_LISTINGS_QUERY }>
          {({ data, loading, error }) => {
            if (loading) {
              return <div>Loading ...</div>;
            }

            return (
              <SearchResults results={data}/>
            )
          }}
        </Query>
      )
    }
  }

  render () {
    return (
      <div>
        <input type='text' name='keyword' placeholder='Enter propery or user name' onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
        <input type='button' name='submit' value='submit' onClick={this.handleSubmit}/>

        { this.displaySearchResults() }
      </div>
    )
  }
}

export default Search
