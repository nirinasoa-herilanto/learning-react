import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addMovieHandler = async (movie) => {
    console.log(movie);

    // Please, uncomment it after creating your real time database on firebase

    // const response = await fetch(
    //   'firebase_real-time_database_endpoints/movies.json',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(movie),
    //   }
    // );

    // const data = await response.json();

    // console.log(data);
  };

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // don't forget it, when you have created your real-time database on firebase
      const response = await fetch('https://swapi.dev/api/films');

      if (!response.ok) throw new Error('Something wen wrong :(');

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
    } catch (error) {
      setError(error?.message);
    }
    setIsLoading(false);
  }, []);

  let moviesContent = <div>No movies found.</div>;

  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, []);

  // or with useCallback()
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  if (isLoading) {
    moviesContent = <div>Loading ...</div>;
  }

  if (error) {
    moviesContent = <div>{error}</div>;
  }

  if (movies.length > 0) {
    moviesContent = <MoviesList movies={movies} />;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>

      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>

      <section>{moviesContent}</section>
    </React.Fragment>
  );
}

export default App;
