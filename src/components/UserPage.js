import Navigationbar from './Navigationbar';
import React, { Component } from 'react'; 
import { Alert,Container } from "react-bootstrap"
import BackendService from '../Services/BackendService ';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      content: "",
      error: ""
    }
  }

  componentDidMount() {
   BackendService.getUserBoard()
   
      .then( response => {
        this.setState({content: response.data})
      } , error => {
        console.log(error);
        this.setState({
          error: error.toString()
        }); 
      });
      console.log(this.state.content)
  }

  render() {
    return (
      <div>
        <Navigationbar/>
        <Container fluid>
            {
              this.state.content ? (
                <div style={{marginTop: "20px"}}>
                  <Alert variant="info">
                    <h2>{this.state.content}</h2>
                  </Alert>
                </div>
              ) : (
                <div style={{marginTop: "20px"}}>
                  <Alert variant="danger">
                    {this.state.error}
                  </Alert>
                </div>
              )
            }
        </Container>
      </div>
    );
  }
}

export default UserPage;