import React, { Component } from 'react';
import Navigationbar from './Navigationbar';
import { Link } from 'react-router-dom';
import { Alert, Button, Container } from "react-bootstrap"

import AuthenticationService from '../Services/AuthenticationService';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = { user: undefined };
  }

  componentDidMount() {
    const user = AuthenticationService.getCurrentUser();
    this.setState({ user: user });
  }

  render() {
    let userInfo = "";
    const loginUserInfo = this.state.user;

    // login
    if (loginUserInfo && loginUserInfo.accessToken) {

      let roles = "";

      loginUserInfo.authorities.forEach(e => {
        roles += " " + e.authority
      });



      userInfo = (
        <div style={{ marginTop: 150, width: 1200 }} >
          <Alert variant="info">
            <h2>User Info</h2>
            <ul>
              <li>Username: {loginUserInfo.username}</li>
              <li>Access Token: {loginUserInfo.accessToken}</li>
              <li>Authorities: {roles}</li>
            </ul>
          </Alert>
        </div>
      );
    } else { // not login
      userInfo = <div style={{ marginTop: "20px" }}>
        <Alert variant="primary">
          <h2>Profile Component</h2>
          <Button color="success"><Link to="/signin"><span style={{ color: "white" }}>Login</span></Link></Button>
        </Alert>
      </div>
    }

    return (
      <div>
        <Navigationbar />
        <Container fluid>
          {userInfo}
        </Container>
      </div>
    );
  }
}

export default Profile;