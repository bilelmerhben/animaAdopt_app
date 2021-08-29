
import React, { Component } from 'react';
import "../Css/navbar.css";
import  { Navbar,Nav ,NavDropdown,NavLink,NavItem} from 'react-bootstrap';
import AuthenticationService from '../Services/AuthenticationService';

export default class Navigationbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);

    this.state = {
      showUser: false,
      showPM: false,
      showAdmin: false,
      username: undefined,
      login: false
    };
  }
  componentDidMount() {
    const loginUserInfo = AuthenticationService.getCurrentUser();
   // console.log(loginUserInfo.username)
   if (loginUserInfo) {
      // let roles = user.roles.map(role => role.name);
      let roles = [];

      loginUserInfo.authorities.forEach(e=> {
        
          roles.push(e.authority)
    
      });
  
      this.setState({
        showUser: true,
        showPM: roles.includes("ROLE_PM") || roles.includes("ROLE_ADMIN"),
        showAdmin: roles.includes("ROLE_ADMIN"),
        login: true,
        username: loginUserInfo.username
      }); 
    } 
  }

  signOut = () => {
    AuthenticationService.signOut();
    // this.props.history.push('/home');
    window.location.reload();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div >
          <Navbar fixed="top"   bg="dark" variant="dark" expand="lg">
  <Navbar.Brand id="logo" href="/"><img style={{height:50}}src="./logo3.png" class="img-fluid" alt="AnimaAdopt"/></Navbar.Brand>
  <Nav className="mr-auto">
        <NavLink href="/">Home</NavLink>
      {/*this.state.showUser && <NavLink href="/user">User</NavLink> */}
        {this.state.showPM && <NavLink href="/pm">PM</NavLink>}
        {this.state.showAdmin && <NavLink href="/admin">Admin</NavLink>}
      </Nav>
      <Navbar.Toggle onClick={this.toggle}/>
      <Navbar.Collapse isOpen={this.state.isOpen} navbar>
        {
          this.state.login ? (
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <Navbar.Text>
                    Signed in as: <a href="/profile">{this.state.username}</a>
                  </Navbar.Text>
              </NavItem>
              <NavItem>
                <NavLink href="/signin" onClick={this.signOut}>SignOut</NavLink>
              </NavItem>
            </Nav>                 
          ) : (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/signin">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">SignUp</NavLink>
              </NavItem>
            </Nav>
          )
        }
      </Navbar.Collapse>
      <NavItem>
                <NavLink href="/info">Info</NavLink>
              </NavItem>
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto"> 
     
    {this.state.showUser && 
        <NavItem title="Association" className="association" >
        <NavLink href="/association">Association</NavLink>
        </NavItem>}
        {this.state.showUser && 
      <NavDropdown title="Services" className="services">
        <NavDropdown.Item href="/adopt">Adopter un animal</NavDropdown.Item>
        {/* <NavDropdown.Item href="/abandon">Céder votre animal</NavDropdown.Item> */}
        <NavDropdown.Item href="/save">Enregistrer votre animal</NavDropdown.Item>
      </NavDropdown>}
     {/*  <NavDropdown title="English"className="multilinge">
      <NavDropdown.Item href="/">English</NavDropdown.Item>
      <NavDropdown.Item href="/">Français</NavDropdown.Item>
      </NavDropdown> */}
      

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
