import React, { Component } from 'react'
import AuthenticationService from '../Services/AuthenticationService'
import Navigationbar from './Navigationbar'
import  { Form,Button} from 'react-bootstrap';
export default class Animal extends Component {
  constructor(props) {
    super(props);
    this.state={
     tab:"",
     age:"",
     genre:"",
     category:"",
     address:"",
     file:"",
     data:"",
     description:"",
     contact:""
     }
  }
   upLoadImage = async (e) => {
    let file = e.target.files[0];
     let formdata = new FormData();
    formdata.append('animal', JSON.stringify({
      "age":this.state.age,
      "genre":this.state.genre,
      "category":this.state.category,
      "address":this.state.address,
      "description":this.state.description,
      "contact":this.state.contact,
    }))
     formdata.append('file',file) ; 
   
    this.setState({data:formdata})
    
}
changeHandler=(e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
}
submit= async(e)=>{
  e.preventDefault();
  console.log(this.state.data)
  await   AuthenticationService.createAnimal(this.state.data)
                                .then((res)=>{
                         console.log(res.data)
                      }).catch((err)=>{console.log(err)})
                      this.props.history.push('/');     
}

    render() {
        return (
            <div>
               <Navigationbar/>
                 <Form style={{width:"500px",marginTop:"100px"}} className="container">
                 <h1>Add Your Animal</h1>
{/*-------------------------*/}
 <Form.Group controlId="age">
  <Form.Label>Age</Form.Label>
  <Form.Control type="number"  name="age" min="0" max="25" value={this.state.age} onChange={this.changeHandler}/>
</Form.Group> 
{/*-------------------------*/}
 <Form.Group controlId="genre">
  <Form.Label>Genre</Form.Label>
  <Form.Control as="select"  name="genre"  value={this.state.genre} onChange={this.changeHandler}>
      <option>Select</option>
      <option>Male</option>
      <option>Femmelle</option>
    </Form.Control>
</Form.Group>
{/*-------------------------*/}
 <Form.Group controlId="category">
    <Form.Label>Category </Form.Label>
    <Form.Control as="select"  name="category" defaultValue="Chat" value={this.state.category} onChange={this.changeHandler}>
    <option>Select</option>
      <option>Chat</option>
      <option>Chien</option>
      <option>Oiseau</option>
    </Form.Control>
    </Form.Group> 

    <Form.Group controlId="address">
  <Form.Label>Address</Form.Label>
  <Form.Control type="text"  name="address"  value={this.state.address} onChange={this.changeHandler}/>
</Form.Group> 
<Form.Group controlId="description">
    <Form.Label>Description </Form.Label>
    <Form.Control as="select"  name="description" value={this.state.description} onChange={this.changeHandler}>
    <option>Select</option>
      <option>Trouvé(e)</option>
      <option>A Céder</option>
      <option>Perdue</option>
    </Form.Control>
    </Form.Group> 
    <Form.Group controlId="address">
  <Form.Label>Contact</Form.Label>
  <Form.Control type="text"  name="contact"  value={this.state.contact} onChange={this.changeHandler}/>
</Form.Group> 
    <Form.Group controlId="">
  <Form.Label>Image</Form.Label>
  <Form.Control   type="file"    name="file"  onChange={this.upLoadImage}  />
</Form.Group> 

   
<Button onClick={this.submit}> click</Button>

</Form>
            
                
            </div>
        )
    }
}



  
  
        
      
  
