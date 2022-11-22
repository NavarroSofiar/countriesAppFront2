import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { getNameCountries } from '../../redux/actions';
import './SearchBar.modules.css'


export default function SearchBar({setCurrentPage}){
    const dispatch = useDispatch();
    const[name,setName] = useState('')
    
 
    
    

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
        console.log(name)       
    }
    function handleSubmit(e){
        e.preventDefault();
        setName('');
        dispatch(getNameCountries(name));
        setCurrentPage(1);
        //setOrden(e.target.value); 
        
         
    }


    return(
        <div>
            <input className='searchBar'
            type = 'text' 
            placeholder='Search Country...'
            value={name}
            onChange={handleInputChange}
            />

            <button className='btnSubmit' type='submit' onClick={handleSubmit}>Search</button>

        </div>
    )
}