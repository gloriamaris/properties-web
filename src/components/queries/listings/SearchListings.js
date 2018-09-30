/**
 * Query component for fetching listings by keyword
 * @author monique <monique.dingding@gmail.com>
 * Sept 30, 2018
 */

import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Header } from 'semantic-ui-react'
import SearchResults from '../../SearchResults'

class SearchListings extends Component {
  constructor (props) {
    super(props)

    this.state = {
      results: []
    }
  }

  render () {
    const { keyword } = this.props

    const GET_LISTINGS_QUERY = gql`
      {
        search(keyword: "${keyword}") {
          __typename
          ... on Property {
            id
            street
            city
            state
            zip
            rent
          }
          ... on User {
            id
            firstName
            lastName
            properties {
              id
              street
              city
              state
              zip
              rent
            }
          }
        }
      }`

    return (
      <Query query={GET_LISTINGS_QUERY}>
        {({ data, loading, error }) => {
          if (loading) {
            return (
              <Header as='h1' textAlign='center'>Please wait ...</Header>
            )
          }

          if (error) {
            return (
              <Header as='h1' color='red' textAlign='center'>Sorry, we cannot find `{keyword}`. Try another one, instead?</Header>
            )
          }

          return (
            <SearchResults results={data} keyword={keyword} />
          )
        }}
      </Query>
    )
  }
}

export default SearchListings
