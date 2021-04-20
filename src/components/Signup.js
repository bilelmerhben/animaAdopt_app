import React, { Component } from 'react';
import  { Form ,Button} from 'react-bootstrap';
import { Row, Col, Alert,Container } from "react-bootstrap"
import AuthenticationService from '../Services/AuthenticationService';
import Navigationbar from './Navigationbar';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class SignUp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      message: "",
      successful: false,
      validForm: true,
      errors: {
        name: '',
        username: '',
        email: '',
        password: ''
      }
    };
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
  
    let errors = this.state.errors;

    switch (name) {
      case 'name':
        errors.name = 
          value.length < 3
            ? 'name must be 3 characters long!'
            : '';
        break;
      case 'username':
        errors.username = 
          value.length < 5
            ? 'Username must be 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }
  
    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
    })  
  }

  signUp = (e) => {
    e.preventDefault();
    const valid = validateForm(this.state.errors);
    this.setState({validForm: valid});
    if(valid){
      AuthenticationService.register(
        this.state.name,
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          console.log("Fail! Error = " + error.toString());
          
          this.setState({
            successful: false,
            message: error.toString()
          });
        }
      );  
    }
  }

  render() {
    const title = <h2>Register User</h2>;
    const errors = this.state.errors;

    let alert = "";

    if(this.state.message){
      if(this.state.successful){
        alert = (
                  <Alert variant="success">
                    {this.state.message}
                  </Alert>
                );
      }else{
        alert = (
                  <Alert variant="danger">
                    {this.state.message}
                  </Alert>
                );
      }
    }

    return ( 
      <div>
       <Navigationbar/>
        <Container fluid>
          <Row className="container">
          <Col sm="12" md={{ size: 4, offset: 4 }}>
          {title}
            <Form onSubmit={this.signUp}>
              <Form.Group controlId="name">
                <Form.Label for="name">name</Form.Label>
                <Form.Control
                  type="text" 
                  placeholder="Enter your Name"
                  name="name" controlId="name"
                  value={this.state.name}
                  autoComplete="name"
                  onChange={this.changeHandler}
                />
                {
                  errors.name && ( 
                      <Alert variant="danger">
                        {errors.name}
                      </Alert>
                    )
                }
              </Form.Group>

              

              <Form.Group controlId="forUsername">
                <Form.Label for="username">Username</Form.Label>
                <Form.Control
                  type="text" 
                  placeholder="Enter UserName"
                  name="username" controlId="username"
                  value={this.state.username}
                  autoComplete="username"
                  onChange={this.changeHandler}
                />
                {
                  errors.username && ( 
                      <Alert variant="danger">
                        {errors.username}
                      </Alert>
                    )
                }
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label for="email">Email</Form.Label>
                <Form.Control required
                  type="text" 
                  placeholder="Enter Email"
                  name="email" controlId="email"
                  value={this.state.email}
                  autoComplete="email"
                  onChange={this.changeHandler}
                />
                {
                  errors.email && ( 
                      <Alert variant="danger">
                        {errors.email}
                      </Alert>
                    )
                }
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label for="password">Password</Form.Label>
                <Form.Control required 
                  type="password" 
                  placeholder="Enter Password"
                  name="password" controlId="password"
                  value={this.state.password}
                  autoComplete="password"
                  onChange={this.changeHandler}
                />
                {
                  errors.password && ( 
                      <Alert key="errorspassword" variant="danger">
                        {errors.password}
                      </Alert>
                    )
                }
              </Form.Group>

              <Button variant="primary" type="submit" onClick={()=>{console.log
              (
        this.state.name,
        this.state.username,
        this.state.email,
        this.state.password
        )}}>
                Create
              </Button>
              {
                !this.state.validForm && (
                  <Alert key="validForm" variant="danger">
                    Please check the inputs again!
                  </Alert>
                )
              }

              {alert}
            </Form>
            </Col>
          </Row>
        </Container>
      </div>);
  }
}

export default SignUp;