
import React, { Component } from 'react';
import "../Css/navbar.css";
import  { Navbar,Nav ,NavDropdown} from 'react-bootstrap';

export default class Navigationbar extends Component {
  render() {
    return (
      <div >
          <Navbar   bg="dark" variant="dark" expand="lg">
  <Navbar.Brand id="logo" href="/"><img src="./logo3.png" class="img-thumbnail img-fluid" alt="AnimaAdopt"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"> 
      <NavDropdown title="Nos Associations" id="association">
        <NavDropdown.Item href="/adopt">SOS animaux</NavDropdown.Item>
        <NavDropdown.Item href="/abandon">Association</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Nos Services" id="services">
        <NavDropdown.Item href="/adopt">Adopter un animal</NavDropdown.Item>
        <NavDropdown.Item href="/abandon">Céder votre animal</NavDropdown.Item>
        <NavDropdown.Item href="/save">Enregistrer votre animal</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link id="connecté" href="/connection">Login</Nav.Link>
      <Nav.Link id="inscription" href="/inscription">SignIn</Nav.Link>
      <Nav.Link id="english"href="/">English</Nav.Link>

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
