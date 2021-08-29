import React, { Component } from 'react'
import "../Css/aboutsite.css"
export default class AboutSite extends Component {
    render() {
        return (
            <div className="container aboutsite" >
           <h1>Qui sommes-nous ?</h1>
           <h3>Mission</h3>
<p>Inspirer et sensibiliser l’être humain au respect et au bien-être animal,
     une personne, une communauté et une ville à la fois.</p>
           <h3>Vision</h3>
<p>Devenir la référence en gestion animalière municipale au Tunisie.</p>
      <h1>Animal perdu ou trouvé?</h1>
      <p>Voyez ici tous les animaux errants actuellement hébergés par notre site. Si vous y retrouvez votre animal,
           contactez-nous rapidement. Vous ne voyez pas la photo de votre compagnon perdu? Consultez la section Association pour vous aider à le retrouver.</p>
           <h1>Voulez vous adopter un animal?</h1>
           <p>Explorer les animaux disponible pour l'adoption et n'hésiter pas de contacter leur propriétaire</p>
            <h4 id="v">{"==>>>"} Veuillez s'insrire en dessus afin de profiter de nos services</h4>
             </div>
        )
    }
}
