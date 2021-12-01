import react, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getMovieData();
  }, [])

  const getMovieData = async () => {
    console.log("run once");
    const results = await axios.get("https://ghibliapi.herokuapp.com/films");
    console.log("response: ", results);
    setMovieData(results.data);
  }

  return (
    <div className="App">
      <h1>Ghibli Movie</h1>
      <div className="data-ui"><h3>data: {movieData.length > 0 ? movieData[0].title : "waiting for data..."}</h3></div>
    </div>
  );
}

export default App;
