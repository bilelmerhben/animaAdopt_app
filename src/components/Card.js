import React, { Component } from 'react';
import  { Carousel} from 'react-bootstrap';
export default class Card extends Component {
  constructor(props) {
    super(props);
   {/* this.wrapper = React.createRef(); */} 
  }
    render() {
        return (
            <div>
            <Carousel className="container" >
  <Carousel.Item >
    <img
      style={{height:500,width:1200}}
      className="rounded mx-auto d-block"
      src="./cat.jpg"
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:500,width:1200}}
    className="rounded mx-auto d-block"
      src="./cat2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     style={{height:500,width:1200}}
     className="rounded mx-auto d-block"
      src="./cat3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</div>  
        )
    }
}

