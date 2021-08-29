import React, { Component } from 'react'

import  { Form,Button} from 'react-bootstrap';
import AuthenticationService from '../Services/AuthenticationService';
import Navigationbar from './Navigationbar';
export default class Abondon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: "",
      prenom: "",
      address: "",
      numeroTelephone: "",
      animal: "",
      error:""
    };
  }
  changeHandler = (event) => {
    
    this.setState({[event.target.name]: event.target.value});
    
  }
  demander =(event)=>{
    event.preventDefault();
    AuthenticationService.demande(this.state.nom,
                                   this.state.prenom,
                                   this.state.address,
                                   this.state.numeroTelephone,
                                   this.state.animal).then(
                                    () => {
                                      this.props.history.push('/');
                                    },
                                    error => {
                                      console.log("demand fail: error = { " + error.toString() + " }");
                                      this.setState({error: "Can not demander !! error"});
                                    })
    console.log(this.state)
  }
    render() {
        return (
            <div>
                <Navigationbar/>
                <Form style={{width:"500px",marginTop:"100px"}} className="container">
<h1>Abondon Your Animal</h1>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Nom</Form.Label>
    <Form.Control type="text"  name="nom" value={this.state.nom} onChange={this.changeHandler}/>
  </Form.Group>
{/*-------------------------*/}
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Prénom</Form.Label>
    <Form.Control type="text"  name="prenom" value={this.state.prenom} onChange={this.changeHandler}/>
  </Form.Group>
{/*-------------------------*/}
<Form.Group controlId="formBasicPassword">
    <Form.Label>Addresse</Form.Label>
    <Form.Control type="text" name="address" value={this.state.address} onChange={this.changeHandler} />
  </Form.Group>
  {/*-------------------------*/}
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Numéro Télephone</Form.Label>
    <Form.Control type="text" name="numeroTelephone" value={this.state.numeroTelephone} onChange={this.changeHandler}/>
  </Form.Group>
  {/*-------------------------*/}
  <Form.Group controlId="formGridState">
      <Form.Label>Type d'animal </Form.Label>
      <Form.Control as="select"  name="animal" defaultValue="Chat" value={this.state.animal} onChange={this.changeHandler}>
        <option>Chat</option>
        <option>Chien</option>
        <option>Oiseau</option>
      </Form.Control>
    </Form.Group>
  {/*-------------------------*/}
  <Button variant="primary" type="submit"  onClick={this.demander}>
    Abondonner
  </Button>

</Form>
           </div>
           
        )
    }
}
