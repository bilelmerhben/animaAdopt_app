/* import React, { Component } from 'react';
// import Navigationbar from './Navigationbar';
import { Link } from 'react-router-dom';
import { Alert,Button, Container } from "react-bootstrap"
import Navigationbar from './Navigationbar';

class Home extends Component {

    constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Navigationbar/>
        <Container fluid>
          <div style={{marginTop:"20px"}}>
            <Alert variant="primary">
              <h2>Reactjs JWT Authentication Application</h2>
              <Button color="success"><Link to="/signin"><span style={{color:"white"}}>Login</span></Link></Button>
            </Alert>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home; */