const Search = ({ fetchCountries, handleInput }) => {
  return (
    <form>
      <label htmlFor="nameCountrie">Find countries:</label>
      <input name="nameCountrie" value={fetchCountries} onChange={handleInput}/>
    </form>  
  )
}
export default Search