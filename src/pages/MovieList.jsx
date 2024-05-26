import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/moviesSlice";
import MovieCard from "../components/MovieCard";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error fetching movies.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-white text-center md:text-4xl text-2xl font-bold mt-10">
        New Releases
        <div className="w-auto h-1 bg-gradient-to-r from-[#0f0f0f] via-red-500 to-[#0f0f0f] opacity-80 mt-1"></div>
      </div>

      <div className="movie-list grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-10 md:p-9 ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
