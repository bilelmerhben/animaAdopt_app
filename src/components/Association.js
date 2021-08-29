

import React, { Component } from 'react'
import "../Css/association.css"
import AuthenticationService from '../Services/AuthenticationService'
import Navigationbar from './Navigationbar'
import  { Form,Button} from 'react-bootstrap';
export default class Association extends Component {
  constructor(props) {
    super(props);
    this.state={
     tab:"",
     associationName:"",
     address:"",
     contact:"",
     file:"",
     data:"",
    
     
     }
  }
   upLoadImage = async (e) => {
    let file = e.target.files[0];
     let formdata = new FormData();
    formdata.append('association', JSON.stringify({
      "associationName":this.state.associationName,
      "address":this.state.address,
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
  await   AuthenticationService.createAssociation(this.state.data)
                                .then((res)=>{
                         console.log(res.data)
                      }).catch((err)=>{console.log(err)})
                      this.props.history.push('/adopt');     
}

    render() {
        return (
            <div>
               <Navigationbar/>
                 <Form style={{width:"500px",marginTop:"100px"}} className="container">
                 <h1>Register Association</h1>
{/*-------------------------*/}
 <Form.Group controlId="age">
  <Form.Label>Association Name</Form.Label>
  <Form.Control type="text"  name="associationName"  value={this.state.associationName} onChange={this.changeHandler}/>
</Form.Group> 


    <Form.Group controlId="address">
  <Form.Label>Address</Form.Label>
  <Form.Control type="text"  name="address"  value={this.state.address} onChange={this.changeHandler}/>
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



  
  
        
      
  
