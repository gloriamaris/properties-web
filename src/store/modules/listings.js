import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_LISTINGS_REQUEST = 'listings:get_listings_request'
const GET_LISTINGS_SUCCESS = 'listings:get_listings_success'
const GET_LISTINGS_FAIL = 'listings:get_listings_fail'

const listings = () => {
  <Query
    query={
      gql`
      {
        search(keyword: "i") {
          __typename
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
          ... on Property {
            id,
            city,
            state
          }
        }
      }`
    }
  >
    {({ loading, error, data }) => {
      if (loading) return { type: GET_LISTINGS_REQUEST, loading }
      if (error) return { type: GET_LISTINGS_FAIL, error }

      return { type: GET_LISTINGS_SUCCESS, data }
    }}
  </Query>
}
