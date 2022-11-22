
import {GET_ALL_COUNTRIES, FILTER_BY_CONTINENT, ORDER_BY_NAME, GET_NAME_COUNTRIES, ORDER_BY_POPULATION, GET_COUNTRIES_BY_ID, POST_ACTIVITIES, GET_ACTIVITIES,FILTER_ACTIVITY} from "../actions"

const initialState={
  countries: [],
  allCountries: [],
  detail:[],
  activities:[],
  
}

const rootReducer = (state = initialState, action) => {
  switch (action.type){
    case GET_ALL_COUNTRIES: 
    return{
      ...state,
      countries: action.payload,
      allCountries: action.payload
    }
    case GET_NAME_COUNTRIES:
      return{
        ...state,
        countries:action.payload
      }

    case GET_COUNTRIES_BY_ID:
      return{
        ...state,
        detail: action.payload
      }

    case FILTER_BY_CONTINENT:
      const allCountries = state.allCountries;
      const continentFiltered = action.payload === "All" ? allCountries : allCountries.filter(con => con.continent === action.payload)
      return{
        ...state,
        countries: continentFiltered
    } 
    
    case ORDER_BY_NAME:
      const sortedArr = action.payload === 'asc'?
          state.countries.sort(function(a,b){
          if(a.name > b.name){
            return 1;
          }
          if(b.name > a.name){
            return -1;
          }
          return 0;
          }) :
          
          state.countries.sort(function(a,b){ //descendente
          if(a.name > b.name){
            return -1;
          }
          if(b.name > a.name){
            return 1;
          }
          return 0;
          })
          return{
          ...state,
          countries: sortedArr
    }

    case ORDER_BY_POPULATION:
      const sortedArrP = action.payload === 'lower'?
          state.countries.sort(function(a,b){
          if(a.population > b.population){
            return 1;
          }
          if(b.population > a.population){
            return -1;
          }
          return 0; 
          }) :
          state.countries.sort(function(a,b){ //descendente
          if(a.population > b.population){
            return -1;
          }
          if(b.population > a.population){
            return 1;
          }
          return 0;
          })
          return{
          ...state,
          countries: sortedArrP
    }
    case POST_ACTIVITIES:
            return {
                ...state,
            }
    case GET_ACTIVITIES:
      return {
          ...state,
          activities: action.payload
      }
    case FILTER_ACTIVITY:
      return {
          ...state,
          countries: action.payload
              }
      
    default: return state;
  }
}

export default rootReducer
