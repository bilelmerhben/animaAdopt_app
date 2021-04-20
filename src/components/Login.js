import React, { Component } from 'react';
import {Container,Button,Form, Alert, FormGroup, Row, Col} from 'react-bootstrap';
import AuthenticationService from '../Services/AuthenticationService';
import Navigationbar from './Navigationbar';
 



class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  doLogin = async (event) => {
    event.preventDefault();

    AuthenticationService
        .signin(this.state.username, 
                  this.state.password)
      .then(
        () => {
          this.props.history.push('/profile');
        },
        error => {
          console.log("Login fail: error = { " + error.toString() + " }");
          this.setState({error: "Can not signin successfully ! Please check username/password again"});
        }
    );
  }

  render() {
    return ( 
      <div >
              <Navigationbar/>
        <Container fluid >
          <Row style={{marginTop:"20px"}} className="container">
          <Col sm="12" md={{ size: 3, offset: 4 }}>
           {/*  <div style={{marginBottom: "10px"}}>
              <img src="" alt="Avatar" className="avatar center" 
                style={{width: "50%", height: "auto"}}/>
            </div> */}
            <Form  onSubmit={this.doLogin}>
              <FormGroup>
                <Form.Label for="username"><strong>Username</strong></Form.Label>
                <Form.Control autoFocus 
                  type="text"
                  name="username"  controlId="username"
                  value={this.state.username}
                  placeholder="Enter Username"
                  autoComplete="username"
                  onChange={this.changeHandler}
                />
              </FormGroup>

              <FormGroup>
                <Form.Label for="password"><strong>Password</strong></Form.Label>
                <Form.Control type="password" 
                  name="password"  controlId="password"
                  value={this.state.password}
                  placeholder="Enter Password"
                  autoComplete="password"
                  onChange={this.changeHandler}
                />
              </FormGroup>

              <Button style={{width:"200px"}}type="submit" variant="primary" size="lg" block>
                Sign In
              </Button>
              {
                this.state.error && (
                  <Alert color="danger">
                    {this.state.error}
                  </Alert>
                )
              }
            </Form>
            </Col>
          </Row>
        </Container>
      </div>);
  }
}

export default Login;