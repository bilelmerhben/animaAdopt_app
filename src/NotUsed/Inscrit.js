/* import React,{ Component } from 'react';
import "../Css/inscrit.css";
import  { Form ,Button} from 'react-bootstrap';
import UserService from '../Services/UserService';
    
    export default class Inscrit extends Component {
        constructor(props) {
      super(props)

        this.state = {
           'firstname':'',
           'lastname':'',
           'username':'',
           'email':'',
           'password':''
        };
        this.changeHandler =this.changeHandler.bind(this);
  }
 
  changeHandler =(e) =>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }

    inscrire = (e)=>{
    e.preventDefault();
let user ={
  'firstname':this.state.firstname,
  'lastname':this.state.lastname,
  'username':this.state.username,
  'email':this.state.email,
  'password':this.state.password,
  

};
console.log('user =>'+ JSON.stringify(user));
UserService.createUser(user);
  }

  annuler=()=>{
this.props.history.push('/');
  }
        render() {
            return (
<div className="inscrit container " >
<Form onSubmit={this.submit} >
  <Form.Row>
  <Form.Group as={Form.Col} controlId="firstname">
      <Form.Label>firstname</Form.Label>
      <Form.Control name="firstname" type="text" placeholder="Entrer votre firstname" required
      value={this.state.firstname} onChange={this.changeHandler}/>
    </Form.Group>
    <Form.Group as={Form.Col} controlId="lastname">
      <Form.Label>lastname</Form.Label>
      <Form.Control name="lastname" type="text" placeholder="Entrer votre lastname" required
      value={this.state.lastname} onChange={this.changeHandler}/>
    </Form.Group>
    
    <Form.Group as={Form.Col} controlId="username">
      <Form.Label>username</Form.Label>
      <Form.Control name="username" type="text" placeholder="username" required
       value={this.state.username} onChange={this.changeHandler}/>
    </Form.Group>
    <Form.Group as={Form.Col} controlId="email">
      <Form.Label>email</Form.Label>
      <Form.Control name="email" type="email" placeholder="email" required
       value={this.state.email} onChange={this.changeHandler}/>
    </Form.Group>
  </Form.Row>
  <Form.Group controlId="password">
    <Form.Label>password</Form.Label>
    <Form.Control name="password" type="password" placeholder="password" required
     value={this.state.password} onChange={this.changeHandler}/>
  </Form.Group>
  

  

  <div className="d-flex justify-content-evenly">
  <Button variant="dark"   type="submit" className="container" onClick={this.inscrire} style={{width:200}}>
      Enregistrer</Button>
<Button variant="info" type="submit" className="container" onClick={this.annuler} style={{width:200}}>
    Annuler
  </Button>
  </div>
</Form>
 </div>
            )
        }
    }
    
     */