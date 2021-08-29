import React, { Component } from 'react'
import "../Css/footer.css"
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="contact">
                <h1 id="logo">www.<span id="site">AnimaAdopt</span>.tn</h1>
                <h3 style={{marginLeft:90}}>Adopt pets animals and make new family. </h3>
               
                </div>
                <div className="footer2">
                <h1 id="logo2">Our Contact</h1>
                <h2 id="sublog1">Email: <h4 id="sublog">animaAdopt@gmail.com</h4></h2>
                <h2 id="sublog2">Phone Number :<h4 id="sublog">+21672123000</h4></h2>
                </div>
            </div>
        )
    }
}
