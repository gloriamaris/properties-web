/**
 * Home component - main section
 *
 * @author monique <monique.dingding@gmail.com>
 * Sept 29, 2018
 */

import React, { Component, Fragment } from 'react'
import { Container, Segment, Input } from 'semantic-ui-react'

// Import graphql queries
import SearchListings from './queries/listings/SearchListings'


class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      keyword: '',
      isLoading: false,
      isDisabled: false,
      results: []
    }
  }

  // sets the state for any changes in input
  // TODO: autocomplete
  handleSearchChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
      isLoading: true
    })

    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 3000)
  }

  // handles event when submit button is clicked
  handleSubmit = async (event) => {
    if (event.key === 'Enter') {
      await this.handleSearchChange(event)
      await this.displaySearchResults()
    }
  }

  // fetch listings from graphql endpoint and loads the results
  // via loading SearchResults component
  displaySearchResults = () => {
    const { keyword } = this.state

    if (keyword) {
      return (
        <Fragment>
          <SearchListings keyword={keyword} />
        </Fragment>
      )
    }
  }

  render () {
    const { isLoading } = this.state

    return (
      <Container className='mt-5'>
        <Segment raised>
          <Input
            size='large'
            placeholder='Type to search for users and properties'
            icon={{ name: 'search', circular: false, link: true }}
            onKeyPress={this.handleSubmit}
            loading={isLoading}
            name='keyword'
            fluid />
        </Segment>
        { this.displaySearchResults() }
      </Container>
    )
  }
}

export default Home
