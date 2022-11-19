import React, {createContext, useState, useEffect} from 'react'
// import {data} from '../data/Data'

export const AppContext = createContext()

export function AppContextProvider(props) {
  
  const [data, setData] = useState([])

  useEffect(() => {
    document.title = `${data.name? "Clima | "+ data.name : "Datos del Clima"}`
  }, [data])
  

  async function GetData(e) {
      e.preventDefault()
      const {country, city} = e.target.elements
      const countryValue = country.value
      const cityValue = city.value
      //console.log("Solicitando Datos ", countryValue , cityValue)
      
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=7360d93c40abe9c868b71cb4b386efa2&units=metric`;

      const response = await fetch(API_URL);
      const datos = await response.json();
      //console.log(datos.weather.description)

      setData(datos)

      city.value=""
      country.value=""
  } 

  return (
    <AppContext.Provider value={
      {
        data,
        GetData,
      }
    }>
        {props.children}
    </AppContext.Provider>
  )
}

