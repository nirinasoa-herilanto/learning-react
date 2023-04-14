import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = async () => {
    const response = await fetch('https://swapi.dev/api/films');

    const data = await response.json();

    const refactorMovies = data.results.map((item) => {
      return {
        id: item.title,
        title: item.title,
        releaseDate: item.release_date,
        openingText: item.opening_crawl,
      };
    });

    setMovies(refactorMovies);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
