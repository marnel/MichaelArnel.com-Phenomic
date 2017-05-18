import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"

import styles from "./index.css"

const Header = (props, { metadata: { pkg } }) => (
 
  <Navbar collapseOnSelect className={ styles.animatedHeader}>
    <Navbar.Header>
      <Navbar.Brand className={ styles.brandLogo } >
        <a href="#">Michael Arnel</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight className={styles.headerMenu }>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavDropdown eventKey={3} title="Blog" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
