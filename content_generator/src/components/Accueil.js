import React, { useEffect, useState } from "react";
import "./Acceuil.css"
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import logo from "../white-horizontal-goodbarber.jpg"


function MyBody () {

  //est appelé une fois que le composant existe == equivaut componentDidMount
  useEffect(() => {

    /***********************************/
    //faire des traitements une fois que le component existe
    /*************************************/

  }//faire un return function ici si on veut qlq chose au démontage
  )

  return <>
    <nav id="gbnav">
      <button id="gbnavbar-burger" title="menu" aria-label="menu" className="gbnavbar-burger--cross">
        <span>

        </span>
      </button>
      <Form.Label id="gblabel">GoodBarberXOpenAI</Form.Label>
    </nav>
    <div >
      <h1>GoodBarber</h1>
      <Link to="generation">Aller au formulaire de création</Link>
    </div>
    <div>
      <Link to="generationRecom">Aller à la recherche d'inspiration</Link>
    </div>
  </>
}

export default function Accueil() {
   return <div>{MyBody()}</div>
}