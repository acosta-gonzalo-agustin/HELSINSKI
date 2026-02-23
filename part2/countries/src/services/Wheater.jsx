import axios from 'axios'
const baseURL = 'http://api.weatherapi.com/v1/forecast.json?key='
const apiKey = import.meta.env.VITE_WEATHER_API_KEY


const getWhearer = (city) => {

    const request = axios.get(`${baseURL}${apiKey}&q=${city}&days=1&aqi=no&alerts=no`)
    return request.then(response => {
        return response.data
    })
} 

export default {getWhearer}