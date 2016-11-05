import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="../../index.html">Structured Social</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}></NavItem>
          <NavItem eventKey={2}></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
