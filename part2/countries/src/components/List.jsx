import CountryDetail from './Country'



const List = ({ countries, show }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } 
  
  if (countries.length === 1) {

    return <CountryDetail country={countries[0]} />
  } 
  

  return (
    countries.map(c => (
      <p key={c.name.common}>
        {c.name.common} 
        <button onClick={() => show(c.name.common)}>show</button>
      </p>
    ))
  )
}

export default List