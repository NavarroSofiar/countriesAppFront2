import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
export const GET_NAME_COUNTRIES = 'GET_NAME_COUNTRIES';
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const POST_ACTIVITIES='POST_ACTIVITIES'
export const FILTER_ACTIVITY="FILTER_BY_ACTIVITy"



export function getAllCountries(){
     return async function(dispatch)  {
      try {
            const json = await axios.get(`https://countriesappback-production-62a7.up.railway.app/countries`);
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: json.data
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function getNameCountries(name){
 return async function(dispatch){
    try {
        var json = await axios.get (`https://countriesappback-production-62a7.up.railway.app/countries?name=${name}`);
        return dispatch({
            type: GET_NAME_COUNTRIES,
            payload:json.data
        })
    } catch (error) {
        alert(error.response.data)
        console.log(error)
    }
 }   
}

export function getCountriesById(id){
    return async function(dispatch){
        try {
            var json = await axios.get(`https://countriesappback-production-62a7.up.railway.app/countries/${id}`);
            return dispatch({
                type: GET_COUNTRIES_BY_ID,
                payload:json.data
            })
        } catch (error) {
          console.log(error)  
        }
    }
}


export const FilterByContinent = (continent) => {
    //console.log(continent)
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
    }
} 

export const orderByName = (name) => {
    return {
        type: ORDER_BY_NAME,
        payload: name
    }
}
export const orderByPopulation = (population) => {
    return {
        type: ORDER_BY_POPULATION,
        payload: population
    }
}

export const createActivity =  (payload) => {
    return async function (dispatch) {
        const inputUser = await axios.post("https://countriesappback-production-62a7.up.railway.app/activities", payload);
        return dispatch ({
            type: POST_ACTIVITIES,
            inputUser
        });
    };
};



export const filterByActivity = (payload) =>  async (dispatch) => {
    const response = await axios.get('https://countriesappback-production-62a7.up.railway.app/countries')

    const response2 = await response.data.filter((e) => (
        e.activities.filter((el) => el.name === payload).length
    )
)

   return dispatch({ 
    type: FILTER_ACTIVITY, 
    payload: response2 }) 

 
}

export const getAllActivities = () => async (dispatch) => {
    const response = await axios.get('https://countriesappback-production-62a7.up.railway.app/activities')
    dispatch({ type: GET_ACTIVITIES, payload: response.data })
}
