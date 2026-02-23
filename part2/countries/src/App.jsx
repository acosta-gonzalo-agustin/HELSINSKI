// import { useEffect } from 'react'
import { useEffect } from 'react'
import Finder from './components/Finder'
import { useState } from 'react'
import countriesServices from './services/Services'
import wheaterServices from './services/Wheater'
import List from './components/List'





const App = () => {

  const [Filter,setFilter] = useState('')
  const [AllCountries,setAllCountries] = useState([])
  const [Countries,setCountries] = useState([])



  useEffect(() => {
    countriesServices.getAllCountries()
    .then(countries => {
      setAllCountries(countries)
      setCountries(countries)
    })
  },[])



  const filterCountries = (filterText) => {
    console.log(filterText)

    const filteredCountries = AllCountries.filter(c => c.name.common.toLowerCase().includes(filterText.toLowerCase()))
      setCountries(filteredCountries)
      console.log(Countries)
  }



  return (
    <>
      <Finder 
  onChange={(event) => filterCountries(event.target.value)} 
/>
      <List countries = {Countries} show = {filterCountries}/>
    </>
  )
}

export default App
