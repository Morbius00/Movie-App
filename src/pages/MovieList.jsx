import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);
  const status = useSelector(state => state.movies.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error fetching movies.</div>;
  }

  return (
    <div className="movie-list grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-10">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
