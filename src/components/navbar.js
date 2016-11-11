import React from 'react'
import { Navbar } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="../../index.html">Structured Social</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  )
}

export default NavigationBar
