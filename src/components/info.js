import React, { Component } from 'react'
import Navigationbar from './Navigationbar'
import "../Css/info.css" 

export default class Infomation extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:200}}>
                <Navigationbar/>
                <div className="info">
                <h1 id="welcome">Welcome to AnimaAdopt</h1>
                <ul id="inofUl">
                Notre rôle est de fournir la meilleure expérience pour les propriétaires d'animaux en Tunisie<br/>
                En Tunisie, la situation des animaux est terrible, beaucoup meurent dans la rue...<br/>
                C'est une platforme pour sauver,adopter et céder votre animaul sans le mettre en danger et ceci à travers les annonces publiées.<br/>
                Pour pouvez aussi contactez les associations disponibles sur notre site pour faire un profit de ses services. <br/>
                <h4>Pour profitez de nos service ,veuillez s'incrire au dessus.</h4>
                <h3 id="visite" >Merci pour votre visite</h3>
                </ul>
                
                
                </div>
            </div>
        )
    }
}
