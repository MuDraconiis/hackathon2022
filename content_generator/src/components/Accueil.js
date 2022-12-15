import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';


function MyBody () {

  //est appelé une fois que le composant existe == equivaut componentDidMount
  useEffect(() => {

    /***********************************/
    //faire des traitements une fois que le component existe
    /*************************************/

  }//faire un return function ici si on veut qlq chose au démontage
  )

  return <div >
    <h1>COUCOU HACKATHON</h1>
    <Link to="generation1">Go to form</Link>
    <Link to="generation2">page des articles</Link>
  </div>
        
}

export default function Accueil() {
   return <div>{MyBody()}</div>
}