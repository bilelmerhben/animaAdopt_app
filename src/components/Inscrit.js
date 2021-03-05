import React, { Component } from 'react';
import "../Css/inscrit.css";
import  { Form ,Button} from 'react-bootstrap';
import UserService from '../Services/UserService';
    
    export default class componentName extends Component {
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
    
        }
  }
   changeNomHandler =(e) =>{
    this.setState({
      nom:e.target.value
    });
  }
  changePrenomHandler =(e) =>{
    this.setState({
      prenom:e.target.value
    });
  }
  changeDateHandler =(e) =>{
    this.setState({
      dateNaissance:e.target.value
    });
  }
  changeEmailHandler =(e) =>{
    this.setState({
      email:e.target.value
    });
  }
  changeMotPasseHandler =(e) =>{
    this.setState({
      motpasse:e.target.value
    });
  }
  changeAddresseHandler =(e) =>{
    this.setState({
      addresse:e.target.value
    });
  }
  changeVilleHandler =(e) =>{
    this.setState({
      ville:e.target.value
    });
  }
  changeEtatHandler =(e) =>{
    this.setState({
      etat:e.target.value
    });
  }
  changeCodeHandler =(e) =>{
    this.setState({
      codepostal:e.target.value
    });
  }
  changeTelephoneHandler =(e) =>{
    this.setState({
      telephone:e.target.value
    });
  }
  inscrire =(e)=>{
e.preventDefault();
let user ={
          'nom':this.state.nom,
           'prenom':this.state.prenom,
           'motpasse':this.state.motpasse,
           'dateNaissance':this.state.dateNaissance,
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
<div className="inscrit container" >
<Form>
  <Form.Row>
  <Form.Group as={Form.Col} controlId="Nom">
      <Form.Label>Nom</Form.Label>
      <Form.Control type="text" placeholder="Entrer votre nom" required
      value={this.state.nom} onChange={this.changeNomHandler}/>
    </Form.Group>
    <Form.Group as={Form.Col} controlId="Prenom">
      <Form.Label>Prenom</Form.Label>
      <Form.Control type="text" placeholder="Entrer votre prenom" required
      value={this.state.prenom} onChange={this.changePrenomHandler}/>
    </Form.Group>
    <Form.Group as={Form.Col} controlId="Password">
      <Form.Label>Mot de passe</Form.Label>
      <Form.Control type="password" placeholder="mot de passe" required
        value={this.state.motpasse} onChange={this.changeMotPasseHandler}/>
    </Form.Group>
    <Form.Group as={Form.Col} controlId="Date">
      <Form.Label>Date de naissance</Form.Label>
      <Form.Control type="date" placeholder="Entrer votre date de naissance" required
       value={this.state.dateNaissance} onChange={this.changeDateHandler}/>
    </Form.Group>
    <Form.Group as={Form.Col} controlId="Email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Entrer votre email" required
       value={this.state.email} onChange={this.changeEmailHandler}/>
    </Form.Group>
  </Form.Row>
  <Form.Group controlId="Addresse">
    <Form.Label>Addresse</Form.Label>
    <Form.Control type="text" placeholder="Enter votre adresse" required
     value={this.state.addresse} onChange={this.changeAddresseHandler}/>
  </Form.Group>
  <Form.Row>

  <Form.Group as={Form.Col} controlId="telephone">
      <Form.Label>Telephone</Form.Label>
      <Form.Control  placeholder="votre telephone" type="text" required
      value={this.state.telephone} onChange={this.changeTelephoneHandler}/>
    </Form.Group>

    <Form.Group as={Form.Col} controlId="ville">
      <Form.Label>Ville</Form.Label>
      <Form.Control  placeholder="Votre ville actuelle" type="text" required
      value={this.state.ville} onChange={this.changeVilleHandler}/>
    </Form.Group>
    <Form.Group as={Form.Col} controlId="etat">
      <Form.Label>Etat</Form.Label>
      <Form.Control as="select" defaultValue="Selectionner" required
       value={this.state.etat} onChange={this.changeEtatHandler}>
        <option>Tunis</option>
        <option>Nabeul</option>
        <option>Sfax</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Form.Col} controlId="codepostal">
      <Form.Label>Code postal</Form.Label>
      <Form.Control type="number" min="8000" max="9000" defaultValue="8000" required
      value={this.state.codepostal} onChange={this.changeCodeHandler}/>
    </Form.Group>
  </Form.Row>
  <Button variant="success" type="submit" className="container" onClick={this.inscrire}>
    Enregistrer
  </Button>
  <Button variant="success" type="submit" className="container" onClick={this.annuler}>
    Annuler
  </Button>
</Form>
 </div>
            )
        }
    }
    