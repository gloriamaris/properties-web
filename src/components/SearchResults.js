/**
 * Search results component
 * @author monique <monique.dingding@gmail.com>
 * Sept 30, 2018
 */

import React, { Component, Fragment } from 'react'
import { Item, Segment, Divider, Header, Table } from 'semantic-ui-react'

// Placeholder images ONLY because image is not included as field in the database
const userImage = 'https://us.123rf.com/450wm/bearsky23/bearsky231608/bearsky23160800006/61158486-stock-vector-standard-user-icon-set-with-men-women-and-multiple-people.jpg?ver=6'
const propImage = 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/house-icon.png'

class SearchResults extends Component {

  renderPropTable = (properties) => {

    if (properties.length === 0) {
      return (
        <Fragment />
      )
    }

    return (
      <Table basic='very' className='mt-3 w-3' celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Rent</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            properties.map((prop) => {
              return (
                <Table.Row key={prop.id}>
                  <Table.Cell>
                    {prop.street}<br/>
                    {prop.city}, {prop.state}<br/>
                    {prop.zip}
                  </Table.Cell>
                  <Table.Cell>
                    ${prop.rent}
                  </Table.Cell>
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>
    )
  }

  // Renders a custom component when response returns User type
  renderUser = (user) => {
    let propName = (user.properties.length > 1)? 'properties': 'property';

    return (
      <Fragment>
        <Item>
          <Item.Image size='tiny' src={userImage} />

          <Item.Content>
            <Header as='h3' color='blue'>{user.firstName} {user.lastName}</Header>
            <Item.Meta>{user.properties.length} {propName}</Item.Meta>
            <Divider hidden />
            <Item.Description>
              { this.renderPropTable(user.properties) }
            </Item.Description>
          </Item.Content>
        </Item>
      </Fragment>
    )
  }

  renderProperties = (prop) => {
    return (
      <Fragment>
        <Item>
          <Item.Image size='tiny' src={propImage} />
          <Item.Content verticalAlign='middle'>
            <Header as='h3' color='blue'>{prop.street} {prop.city}, {prop.state} {prop.zip}</Header>
            <Item.Meta>
              <Header as='h4' color='grey'>${prop.rent}</Header>
            </Item.Meta>
          </Item.Content>
        </Item>
      </Fragment>
    )
  }

  render () {
    const { results, keyword } = this.props

    return (
      <Fragment>
        <Header as='h2' color='green'>Showing you {results['search'].length} result(s) for "{keyword}"</Header>

        <Segment>
          <Segment basic>
            <Item.Group divided unstackable>
              {
                // eslint-disable-next-line
                results['search'].map((item) => {
                  if (item.__typename === 'User') {
                    return (
                      <Fragment key={item.id}>
                        { this.renderUser(item) }
                      </Fragment>
                    )
                  } else if (item.__typename === 'Property') {
                    return (
                      <Fragment key={item.id}>
                        { this.renderProperties(item) }
                      </Fragment>
                    )
                  }
                })
              }
            </Item.Group>
          </Segment>
        </Segment>
      </Fragment>
    )
  }
}

export default SearchResults
