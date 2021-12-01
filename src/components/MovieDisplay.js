import { useState, useEffect } from 'react';
import axios from 'axios';

function MovieDisplay() {
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieData();
  }, [])

  const getMovieData = async () => {
    try {
      const results = await axios.get("https://ghibliapi.herokuapp.com/films");
      setMovieData(results.data);
    } catch (error) {
      setError(error);
    }
  }
  const errorMessage = (error) => {
    console.log("Error: " + error.message);
    if (error.message.match(/418/i)) {
      return "418 I'm a tea pot 🫖, silly"
    } else {
      return error.message
    }
  }

  return (
    <div className="MovieDisplay">
      <h1>Ghibli Movie:</h1>
      <div className="data-ui"><h3>{movieData.length > 0 ? movieData[0].title : "waiting for data..."}</h3></div>
      {error ? <div className="data-error"> {errorMessage(error)} </div> : null}
    </div>
  );
}

export default MovieDisplay;
