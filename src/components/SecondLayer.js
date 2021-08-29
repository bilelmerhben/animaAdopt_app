import React, { Component } from 'react'
import "../Css/secondLayer.css";
import  { Card,Container,Row,Col} from 'react-bootstrap';
export default class SecondLayer extends Component {
    render() {
        return (
           
                <Container className="a ">
  <Row>
    <Col to="/animalTrouvé"> <Card  className="a1 border">
      <span  id="txt">Animal Perdue Ou Trouvé?</span>
      <img id ="symbole" src="./empreinte2.jpg" alt="img"/>
      </Card></Col>
    <Col > <Card   className="a2 border">
      <span  id="txt">Adopter un Animal</span>
      <img id ="symbole" src="./empreinte2.jpg" alt="img"/>
      </Card></Col>
    <Col> <Card  className="a3 border">
      <span  id="txt">S'Impliquer</span>
      <img id ="symbole" src="./empreinte2.jpg" alt="img"/>
      </Card></Col>
  </Row>
  
</Container>
        
        
      
           
          
        )
    }
}
