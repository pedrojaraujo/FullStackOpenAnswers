import { useEffect, useState } from 'react';
import Search from './components/Search';
import ListCountrie from './components/ListCountrie';
import serviceCountry from './services/countries';

function App() {

  const [countries, setCountries] = useState([])
  const [fetchCountries, setFetchCountries] = useState("")
  const [showCountry, setShowCountry] = useState([])

  //Loading countrys
  useEffect(() => {
    const toggleCountry = () => {
      serviceCountry
      .getAll()
      .then(r => setCountries(r))
    }
    toggleCountry()
  }, [])

  const handleInput = (e) => {
    const searchCountry = e.target.value.toLowerCase();
    setFetchCountries(searchCountry);
  
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchCountry)
    );
    setShowCountry(filtered);
  };

  return (
    <main className="App">
       <Search
        fetchCountries={fetchCountries}
        handleInput={handleInput}
      />
      <ListCountrie 
        fetchCountries={fetchCountries}
        countries={countries}
        showCountry={showCountry}
      />
    </main>    
  );
}
export default App;
