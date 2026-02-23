import { useEffect, useState } from 'react'
import weatherService from '../services/Wheater'



const CountryDetail = ({ country }) => {

  const [weather, setWeather] = useState(null)
  const capital = country.capital[0]

  useEffect(() => {

    weatherService
      .getWhearer(capital)
      .then(data => {
        console.log(data)
        setWeather(data)
      })
      .catch(error => console.log('Error weather:', error))
  }, [capital])

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {capital}</p>
      <p>Area {country.area}</p>
      
      <h3>languages:</h3>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        {Object.values(country.languages).map(l => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      
      <img src={country.flags.png} alt="flag" width="150" />

      {weather ? (
        <div>
          <h3>Weather in {capital}</h3>
          <p>Temperature {weather.current.temp_c} Celsius</p>
          <img src={weather.current.condition.icon} alt="icon" />
          <p>Wind {weather.current.wind_kph} km/h</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  )
}


export default CountryDetail