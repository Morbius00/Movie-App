import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(state => state.movies.favoriteMovies);
  const isFavorite = favoriteMovies.find(m => m.id === movie.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(movie));
  };

  return (
    <div className="movie-card p-4 border rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer" onClick={() => window.open(movie.imdbUrl, '_blank')}>
      <img className="w-full h-64 object-cover mb-4 rounded" src={movie.image} alt={movie.image} />
      <div className="movie-details w-96 h-auto">
        <h3 className="text-lg text-black font-semibold mb-2">{movie.movie}</h3>
        <p className="text-gray-600 mb-1">{movie.imdb_url}</p>
        <p className="text-gray-600 mb-1">{movie.year}</p>
        <p className="text-gray-600 mb-4">{movie.rating}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all" onClick={handleFavoriteClick}>
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
