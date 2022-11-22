import React from 'react'
import { Link } from 'react-router-dom'
import './Card.modules.css'

const Card = ({ flag, name, continent, id }) => {
  return (
    <div className='countryCard'>
      <Link to={`/countries/${id}`}>

     <h3 className='pName'>{name} ({id})</h3>
     <h5 className='pContinent'>{continent}</h5>
     <img className='imgCountry' src={flag} alt="img not found"  width="200px" heigth="250px"/> 
     
     </Link>
    </div>
  )
}

export default Card
 