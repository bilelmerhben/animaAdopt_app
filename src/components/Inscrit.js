import React, { Component } from 'react';
import "../Css/inscrit.css";
import  { Form ,Button} from 'react-bootstrap';
import UserService from '../Services/UserService';
    
    export default class Inscrit extends Component {
        constructor(props) {
      super(props)

        this.state = {
           'nom':'',
           'prenom':'',
           'motpasse':'',
           'dateNaissance':'',
           'email':'',
           'addresse':'',
           'telephone':'',
           'ville':'',
           'etat':'',
           'codepostal':''
    
        };
        this.changeHandler =this.changeHandler.bind(this);
  }
 
  changeHandler =(e) =>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  inscrire =(e)=>{

let user ={
  'nom':this.state.nom,
  'prenom':this.state.prenom,
  'password':this.state.password,
  'dateDeNaissance':this.state.dateDeNaissance,
  'email':this.state.email,
  'addresse':this.state.addresse,
  'telephone':this.state.telephone,
  'ville':this.state.ville,
  'etat':this.state.etat,
  'codepostal':this.state.codepostal

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
<Form>
  <Form.Row>
  <Form.Group as={Form.Col} controlId="Nom">
      <Form.Label>Nom</Form.Label>
      <Form.Control name="nom" type="text" placeholder="Entrer votre nom" required
      value={this.state.nom} onChange={this.changeHandler}/>
    </Form.Group>
    <Form.Group as={Form.Col} controlId="Prenom">
      <Form.Label>Prenom</Form.Label>
      <Form.Control name="prenom" type="text" placeholder="Entrer votre prenom" required
      value={this.state.prenom} onChange={this.changeHandler}/>
    </Form.Group>
    
    <Form.Group as={Form.Col} controlId="Date">
      <Form.Label>Date de naissance</Form.Label>
      <Form.Control name="dateDeNaissance" type="date" placeholder="Entrer votre date de naissance" required
       value={this.state.dateDeNaissance} onChange={this.changeHandler}/>
    </Form.Group>
    <Form.Group as={Form.Col} controlId="Email">
      <Form.Label>Email</Form.Label>
      <Form.Control name="email" type="email" placeholder="Entrer votre email" required
       value={this.state.email} onChange={this.changeHandler}/>
    </Form.Group>
  </Form.Row>
  <Form.Group controlId="Addresse">
    <Form.Label>Addresse</Form.Label>
    <Form.Control name="addresse" type="text" placeholder="Enter votre adresse" required
     value={this.state.addresse} onChange={this.changeHandler}/>
  </Form.Group>
  <Form.Row>

  <Form.Group as={Form.Col} controlId="telephone">
      <Form.Label>Telephone</Form.Label>
      <Form.Control name="telephone" placeholder="votre telephone" type="text" required
      value={this.state.telephone} onChange={this.changeHandler}/>
    </Form.Group>

    <Form.Group as={Form.Col} controlId="ville">
      <Form.Label>Ville</Form.Label>
      <Form.Control name="ville" placeholder="Votre ville actuelle" type="text" required
      value={this.state.ville} onChange={this.changeHandler}/>
    </Form.Group>
    <Form.Group as={Form.Col} controlId="etat">
      <Form.Label>Etat</Form.Label>
      <Form.Control name="etat" as="select" defaultValue="select" required
       value={this.state.etat} onChange={this.changeHandler}>
          
        <option value="tunis">Tunis</option>
        <option value="nabeul">Nabeul</option>
        <option value="sfax">Sfax</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Form.Col} controlId="codepostal">
      <Form.Label>Code postal</Form.Label>
      <Form.Control name="codepostal"  type="number" min="8000" max="9000" defaultValue="8000" required
      value={this.state.codepostal} onChange={this.changeHandler}/>
    </Form.Group>
    <Form.Group as={Form.Col} controlId="Password">
      <Form.Label>Mot de passe</Form.Label>
      <Form.Control name="password" type="password" placeholder="mot de passe" autoComplete="on" required
        value={this.state.password} onChange={this.changeHandler}  />
    </Form.Group>
  </Form.Row>

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
    