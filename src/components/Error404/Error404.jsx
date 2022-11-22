import React from 'react'
import {Link} from 'react-router-dom'
import mundito from '../Error404/img/Mundo_hecho_de_Banderas.gif'

const Error404 = () => {
  return (
    <div className='fondoE'>
     
      <h1>PAGE NOT FOUND</h1>
      <h2>error 404</h2>
      <div><Link to='/home'><button className='btnReload'>Back to countries</button></Link></div>
      <img src={mundito} alt="mundito..." />
      
      
       </div>
  )
}

export default Error404
