import React, { Component } from 'react';
import  { CardDeck,Card,Image,Badge} from 'react-bootstrap';
import AuthenticationService from '../Services/AuthenticationService';
import Navigationbar from './Navigationbar';
import "../Css/adopt.css"
export default class Adopter extends Component {
  constructor(props) {
    super(props);
    this.state={
      associations:""
    }
  }
  async componentDidMount(){
  AuthenticationService.getAssociations().then((res)=>{this.setState({ associations:[...res.data]})})
                                    .catch((err)=> console.log(err))
  }
 
    render() {
        return (
            <div className="adopt">
               <Navigationbar/>
 


{
                     <div className="container">
                         <div class="row row-cols-3">
                         {[...this.state.associations].map(e=>
                         <div>
                          <CardDeck style={{width:400,paddingLeft:90}}>
  <Card >
      <Image style={{width:250,margin:25,marginBottom:0,marginTop:10}} src={`data:*/*;base64,${e.file}`}  roundedCircle />
    <Card.Body>
      <Card.Title>Name : {e.associationName}</Card.Title>
      <Card.Text>Address : {e.address}</Card.Text>
    
    </Card.Body>
    <Card.Footer>
     <Badge variant="primary" style={{marginLeft:10}}>Contact:{e.contact}</Badge>
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

