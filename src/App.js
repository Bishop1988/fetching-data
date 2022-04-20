import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [characters, setCharacters] = useState([])
  const [dog, setDog] = useState("")
  const [error, setError] = useState(null)
  

  // useEffect(() => {
  //   const fetchCharacters = async () => {
  //     try {
  //       const response = await fetch("https://www.breakingbadapi.com/api/characters")
  //       if (!response.ok) {
  //         throw new Error(response.statusText)
  //       }
  //       const data = await response.json()
  //       setCharacters(data)
        
  //     } catch (err) {
  //       console.log(err.message)
  //       setError("Could not fetch data")
  //     }
  //   }
  //   fetchCharacters()
  // }, [])

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breed/Affenpinscher/images/random")
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        setDog(data)
        
      } catch (err) {
        console.log(err.message)
        setError("Could not fetch data")
      }
    }
    fetchDog()
  }, [dog])
  
 
  

  // console.log(characters)
  return (
    <div className="App">
      {/* {characters.map((character) => (
        <div key={character.name}>
          {error && <p>{error}</p>}
          <div>{ character.name }</div>
          <img src={character.img} alt="Breaking bad character" />

        </div>
      ))} */}
      {/* {dog.map(dog => (
        <div>
          {error && <p>{error}</p>}
          <img src={dog.message} />
        </div>
      ))} */}
      <img src={dog.message} alt="doggy" />
    </div>
  );
}

export default App;
