import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const FavoriteMovies = () => {
  const favoriteMovies = useSelector(state => state.movies.favoriteMovies);

  return (
    <div className="favorite-movies-list">
      {favoriteMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default FavoriteMovies;
