import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getCountriesById} from '../../redux/actions';
import './Detail.modules.css'


 const Detail = (props) => {
    const dispatch= useDispatch()

useEffect(()=>{
    dispatch(getCountriesById(props.match.params.id));
},[dispatch, props])

const detail = useSelector((state =>state.detail)) 
//console.log(detail)

  
  return (
<div className= "container-detail">

  {

      detail.length > 0 ?
      <div key='count' >
          <div className = "tarjeta">
              <div className = "tarjeta-image">
                  <img src={detail[0].flag} alt="img not found" width="350px" heigth="290px"/>
              </div>
              
              <div >
                  <h3>Name: {detail[0].name}</h3>
              </div>

              <div>
                Capital: {detail[0].capital}
              </div>
              
              <div>
                  <span> Continent: {detail[0].continent}</span>
              </div>

              <div>
                  <span>Subregion: {detail[0].subregion}</span>
              </div>
              
              <div>
                <span>Area: {(detail[0].area/1000000).toFixed(2)} millones km²</span>
              </div>

              <div>
                <span>Population: {detail[0].population} Hab</span>
              </div>
                

                <h3>Activities:</h3>
                {detail[0].activities.length === 0 ? (
              <h3>Has no activities</h3>
              ) : 
              (<div>
                <p>{detail[0].activities.map((act) => (
              <li key={act.id}>
              <span><strong>{act.name}</strong> ({act.season}) | Duration:{' '}
              {act.duration} - Difficulty: {act.difficulty} -Lugar:{act.lugar}
            </span>
            </li>
            ))}</p>
              </div> )}
          </div>  
      </div>
      :
      <div>Loading</div>
    }
      <button
className='btnReload'
onClick={() => props.history.goBack()}
>
Back to countries
</button>
</div>
  )
}

export default Detail
 

