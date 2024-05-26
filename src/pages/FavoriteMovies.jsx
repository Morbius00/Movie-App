import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const FavoriteMovies = () => {
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-white text-center md:text-4xl text-2xl font-bold mt-10">
        Your Favorite Movies
        <div className="w-auto h-1 bg-gradient-to-r from-[#0f0f0f] via-red-500 to-[#0f0f0f] opacity-80 mt-1"></div>
      </div>
      <div className="favorite-movies-list grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-10">
        {favoriteMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteMovies;
