import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const FavoriteMovies = () => {
  const favoriteMovies = useSelector(state => state.movies.favoriteMovies);

  return (
    <div className="favorite-movies-list grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-10">
      {favoriteMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default FavoriteMovies;
