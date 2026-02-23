import axios from 'axios'
const baseurl = 'https://studies.cs.helsinki.fi/restcountries/api/'


const getAllCountries = () => {

    const request = axios.get(`${baseurl}/all`)
      
    return request.then(response => {
        return response.data
    })

}


const getByCountrieName = (name) => {

    const request = axios.get(`${baseurl}/name/${name}`)

    return request.then(response => {
        return response.data
    })
} 









export default {getAllCountries, getByCountrieName}