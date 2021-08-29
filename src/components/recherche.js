
import React, { Component } from 'react'
import { Form,Button, CardDeck, Card, Image, Badge } from 'react-bootstrap'
import "../Css/recherche.css";
import AuthenticationService from '../Services/AuthenticationService';
export default class Recherche extends Component {
   // eslint-disable-next-line no-useless-constructor
   constructor(props) {
       super(props)

   }
   
    state={
        category:"",
        age:"",
        data:"",
        animalsSelected:"",
        mode:"",
        show:this.props.show
       
    }

    search=async(e)=>{
e.preventDefault();
//this.setState({test:true})
//console.log(this.props.test)
/*let formdata = new FormData();
formdata.append('test', JSON.stringify({
    "category":this.state.category,
    "age":this.state.age
    
  }))
this.setState({data:formdata})*/
const ShowSearch= AuthenticationService.getAnimalsWithAgeAndCategory(this.state.category,this.state.age)
                                                                    .then((res)=>{this.setState({ animalsSelected:[...res.data]})})
                                                                    .catch((err)=>console.log(err))
  if(ShowSearch){
   
    this.props.onChangeShow("true")
  }else 
  this.props.onChangeShow("false")                                                                  
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        console.log(e.target.value)
    }
    render() {
        return (
            <div className="container reche">
                <Form inline >
            <Form.Group controlId="category">
            <Form.Control as="select"  name="category" placeholder="category" value={this.state.category} onChange={this.changeHandler}>
                       <option>Select</option>
                       <option>Chat</option>
                       <option>Chien</option>
                       <option>Oiseau</option>
            </Form.Control>
            </Form.Group> 
            <Form.Group controlId="age">
              <Form.Control type="text" placeholder="age" name="age"  value={this.state.age} onChange={this.changeHandler}/>
            </Form.Group> 
                    <Button type="submit" onClick={this.search}>Search</Button>
                </Form>
                {
                     <div className="container">
                         <div class="row row-cols-3 ">
                         {[...this.state.animalsSelected].map(e=>
                      
                         <div style={{backgroundColor:"white"}}>
                           
                          <CardDeck style={{width:320,paddingLeft:90}}>
                         
  <Card >

      <Image   style={{width:150,margin:25,marginBottom:0,marginTop:10}} src={`data:*/*;base64,${e.file}`}  roundedCircle />
      
     
    <Card.Body >
   
      <Card.Title>Category:{e.category}</Card.Title>
      <Card.Text>
      Address:Diponible en {e.address}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <Badge variant="info">Sexe:{e.genre}</Badge>
     <Badge variant="info" style={{marginLeft:10}}>Age:{e.age}</Badge>
    </Card.Footer>
  </Card>
</CardDeck>
                      </div>    
                       
                    )}
                  
                      </div>
                    </div>
                 } 
            </div>
        )
    }
}
