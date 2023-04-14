import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <div>Loading ...</div>}
      </section>
    </React.Fragment>
  );
}

export default App;
