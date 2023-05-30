const ListCountrie = ({ showCountry }) => {

  return (
    <ul> 
      {showCountry.length > 10 ?
      <p>Too many matches, specify another filter.</p>
      :
      showCountry.map((country) => 
      <li key={country.name.official}> {country.name.common} </li>)
      }
    </ul>
  )
}
export default ListCountrie
