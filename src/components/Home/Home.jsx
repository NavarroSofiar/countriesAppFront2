import React from 'react';
import { useState,useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCountries, FilterByContinent, orderByName, orderByPopulation} from '../../redux/actions';
import {Link} from 'react-router-dom'
import Card from '../Card/Card';
import Paged from '../Paged/Paged';
import SearchBar from '../SearchBar/SearchBar';
import AllActivities from '../CreateActivity/AllActivities';
import './Home.modules.css'


export default function Home(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries)
    const [orden,setOrden] = useState('')
    const [currentPage,setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(9) 
    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage

    let indFirstCountry = 0; //Para restar al primer indice de los paises despues de la pag 1
    let indLastCountry = 0; //Para restar al ultimo indice de los paises despues de la pag 1
    
    if (currentPage === 1) {
      indFirstCountry = 0;
      indLastCountry = 0;
    } else {
      indFirstCountry = currentPage - 2;
      indLastCountry = currentPage - 1;
    }
    const currentCountries =  allCountries.slice(
        indexOfFirstCountry + indFirstCountry,
        indexOfLastCountry + indLastCountry
      ); //deja solo la cantidad de países que necesito en cada página
    
   

    const totalPages= (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect (() => {
        dispatch(getAllCountries())        
       }, [dispatch]);
    
    

    const handleOnClickReset = (e) => {
        e.preventDefault();
        dispatch(getAllCountries());
        setCurrentPage(1);
       setOrden('All');
       
    }

    function handleFilterContinent(e){
        e.preventDefault();
       dispatch(FilterByContinent(e.target.value));
       setCurrentPage(1);
       setOrden(e.target.value);
       
    }
    
    function handleSort(e){
        if (e.target.value === "All") {
            dispatch(getAllCountries());
            setCurrentPage(1);
            setOrden(e.target.value);
          } else {
            dispatch(orderByName(e.target.value));
            setCurrentPage(1);
            setOrden(e.target.value);
          }
       }
    function handleSortP(e){
        if (e.target.value === "All") {
            dispatch(getAllCountries());
            setCurrentPage(1);
            setOrden(e.target.value);
          } else {
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }
  }

    return (
    <div className="home-order">
    
        <h1>Explore and travel</h1>
        <div>
                <button className='btnReloadEsp'value={orden}  onClick={handleOnClickReset}>Reset</button>
        </div>
        <br></br> 
        <div className="filtrados">

            <select  onChange={e => handleSort(e)}>
            <option value={"All"}>Order Alphabetic...</option>
            <option value={"asc"}>A-Z</option>
            <option value={"desc"}>Z-A</option>
            </select>

            
            <select  onChange={e => handleSortP(e)}>
            <option value={"All"}>Population...</option>
            <option value={"higher"}>Higher Population</option>
            <option value={"lower"}>Lower Population</option>
            </select>
            
            <select  onChange={e => handleFilterContinent(e)}>
            <option value={"All"}> Continents...</option>
            <option value={"Europe"}>Europe </option>
            <option value={"Asia"}>Asia </option>
            <option value={"Oceania"}>Oceania</option>
            <option value={"Africa"}>Africa</option> 
            <option value={"Antarctica"}>Antarctic</option> 
            <option value={"North America"}>North America</option> 
            <option value={"South America"}>South America</option>
            </select>
           < AllActivities />
            
           <br></br> 
           <br></br>
            
        </div>
         <div className='bloqueAct'>  
         <SearchBar setCurrentPage={setCurrentPage}/> 
        <Link to='/activities'><button className='btnReload'>Create Activity</button></Link>
         
         </div>
           
            <div>
             <Paged
                countriesPerPage = {countriesPerPage}
                allCountries = {allCountries.length}
                totalPages = {totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                />
         </div>   
          <div className="cards-container">
                {
                    currentCountries.length 
                    ?
                    currentCountries?.map(co => {
                        return (
                        
                        <Card flag={co.flag} name={co.name} continent={co.continent}  id={co.id} key={co.id}/>
                        
                    )})
                    :
                    <div>Loading...</div> 
                }
            </div>

            
            
        
        
        
    </div>
        

        )
}