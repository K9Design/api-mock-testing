import { useState, useEffect } from 'react';
import axios from 'axios';

function MovieDisplay() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getMovieData();
  }, [])

  const getMovieData = async () => {
    const results = await axios.get("https://ghibliapi.herokuapp.com/films");
    setMovieData(results.data);
  }

  return (
    <div className="MovieDisplay">
      <h1>Ghibli Movie:</h1>
      <div className="data-ui"><h3>{movieData.length > 0 ? movieData[0].title : "waiting for data..."}</h3></div>
    </div>
  );
}

export default MovieDisplay;
