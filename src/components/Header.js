/**
 * Header component
 * @author monique <monique.dingding@gmail.com>
 * Sept 30, 2018
 */

import React, { Component } from 'react'

import { Container, Image } from 'semantic-ui-react'
import logo from '../assets/logo.png'

class Header extends Component {
  render () {
    return (
      <div>
        <Container className='mt-5'>
          <Image src={logo} alt='logo' size='large' centered />
        </Container>
      </div>
    )
  }
}

export default Header
