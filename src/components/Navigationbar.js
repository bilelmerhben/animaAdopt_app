
import React, { Component } from 'react';

import  { Navbar,Nav ,NavDropdown} from 'react-bootstrap';

export default class Navigationbar extends Component {
  render() {
    return (
      <div>
          <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/">AnimaAdopt</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
      <NavDropdown title="Nos Associations" id="basic-nav-dropdown">
        <NavDropdown.Item href="/adopt">SOS animaux</NavDropdown.Item>
        <NavDropdown.Item href="/abandon">Association</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Nos Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="/adopt">Adopter un animal</NavDropdown.Item>
        <NavDropdown.Item href="/abandon">Céder votre animal</NavDropdown.Item>
        <NavDropdown.Item href="/save">Enregistrer votre animal</NavDropdown.Item>
      </NavDropdown>
    
      <Nav.Link href="/inscription">S'inscrire</Nav.Link>
      <Nav.Link href="/">English</Nav.Link>

    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>*/}
    
  </Navbar.Collapse>
</Navbar>
      </div>
    )
  }
}
