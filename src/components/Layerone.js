import React, { Component } from 'react';
import  { Carousel,CardDeck,Card,Image,Badge} from 'react-bootstrap';
import "../Css/layerOne.css";
import AuthenticationService from '../Services/AuthenticationService';
import Footer from './footer';
import Navigationbar from './Navigationbar';
import Recherche from './recherche';
import "../Css/layerOne.css"
import SecondLayer from './SecondLayer';
import AboutSite from './AboutSite';
export default class Layerone extends Component {
  constructor(props) {
    super(props);
    this.state={
      animals:"",
      show:"false",
      style:"red",
      showUser: false,
      showPM: false,
      showAdmin: false,
      username: undefined,
      login: false
     }
   {/* this.wrapper = React.createRef(); */} 
  }
  async componentDidMount(){
  AuthenticationService.getAnimals().then((res)=>{this.setState({ animals:[...res.data]})})
                                    .catch((err)=> console.log(err))
  
                                   
                                  
                                 
                                    const loginUserInfo = AuthenticationService.getCurrentUser();
                                   // console.log(loginUserInfo.username)
                                   if (loginUserInfo) {
                                      // let roles = user.roles.map(role => role.name);
                                      let roles = [];
                                
                                      loginUserInfo.authorities.forEach(e=> {
                                        
                                          roles.push(e.authority)
                                    
                                      });
                                  
                                      this.setState({
                                        showUser: true,
                                        showPM: roles.includes("ROLE_PM") || roles.includes("ROLE_ADMIN"),
                                        showAdmin: roles.includes("ROLE_ADMIN"),
                                        login: true,
                                        username: loginUserInfo.username
                                      }); 
                                    
                                  }
  
                                  }
  show=(name)=>{
    this.setState({show:name})
    console.log(this.state.show)
  }
    render() {
        return (
            <div className="layerone">
               <Navigationbar/>
              
 <Carousel className="container" >
  <Carousel.Item >
    <img
      style={{height:400,width:1200}}
      className="rounded mx-auto d-block"
       src="./Slider1.png"
      alt="First slide"
      
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:400,width:1200}}
    className="rounded mx-auto d-block"
      src="./cat3.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
  {/*     <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     style={{height:400,width:1200}}
     className="rounded mx-auto d-block"
     src="./slide2.jpg"
     alt="Third slide"
    />

    <Carousel.Caption>
     {/*  <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 

<SecondLayer/>
<AboutSite/>
{this.state.showUser && (<Recherche show={this.state.show} onChangeShow={this.show}/>)}
{this.state.showUser && (
  <div className="container">
                         <div class="row row-cols-3">
                         {[...this.state.animals].map(e=>
                         <div>
                          <CardDeck style={{width:400,paddingLeft:90}}>
  <Card >
      <Image style={{width:250,margin:25,marginBottom:0,marginTop:10}} src={`data:*/*;base64,${e.file}`}  roundedCircle />
    <Card.Body>
      <Card.Title>Category:{e.category}</Card.Title>
      <Card.Text>Address: {e.address}</Card.Text>
     
    {(e.description === "Trouvé(e)")? (<Card.Text>Situation: <span style={{  color:"green",fontWeight:"bold"}}>{e.description}</span> </Card.Text>)
    :((e.description === "A Céder")?
      
     ( <Card.Text>Situation: <span style={{  color:"red",fontWeight:"bold"}}>{e.description}</span> </Card.Text>)
      :(<Card.Text>Situation: <span style={{  color:"orange",fontWeight:"bold"}}>{e.description}</span> </Card.Text>)
    )} 
     
     
     <Card.Text>Contact: {e.contact}</Card.Text>
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
)                  
                }

<Footer/>
</div>  
        )
    }
}

