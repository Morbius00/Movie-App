import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/moviesSlice";
import RedButton from "../common/Button";
import MoviePoster from "./assets/movieposter.jpg";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);
  const isFavorite = favoriteMovies.find((m) => m.id === movie.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(movie));
  };

  // const baseUrl = "https://dummyapi.online/api/movies"; // Replace this with your base URL
  // const imageUrl = baseUrl + movie.image;

  return (
    <section className=" flex md:flex-col items-center justify-center sm:flex-col max-w-[460px] bg-transparent shadow-md rounded-lg md:p-2  lg:p-10 p-11">
      <div className=" rounded-xl relative transform hover:-translate-y-4 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white">
        <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent rounded-xl"></div>
        <div className="relative flex items-center justify-center cursor-pointer z-10 p-4 h-auto  ">
          <div className=" align-self-end w-full">
            <div className="h-32"></div>
            <div className="space-y-6 ">
              <div className="flex flex-col space-y-2 inner">
                <div className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
                    Trailer
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-white"
                  data-unsp-sanitized="clean"
                >
                  {movie.movie}
                </h3>
                <div className="mb-0 text-lg text-gray-400">
                  We serve you the Lates Movies
                </div>
              </div>
              <div className="flex flex-row justify-between ">
                <div className="flex flex-col ">
                  <div className="popularity">{movie.rating}</div>
                  <div className="text-sm text-gray-400">Rating ⭐</div>
                </div>

                <div className="flex flex-col ">
                  <div className="release">0.00 min</div>
                  <div className="text-sm text-gray-400">Runtime ⏰</div>
                </div>
              </div>
              <div className="flex flex-col overview">
                <div className="flex flex-col"></div>
                <div className="text-xs text-gray-400 mb-2">Overview:</div>
                <p className="text-xs text-gray-100 mb-6">
                  Paul Atreides, a brilliant and gifted young man born into a
                  great destiny beyond his understanding, must travel to the
                  most dangerous planet in the universe to ensure the future of
                  his family and his people. As malevolent forces explode into
                  conflict over the planet's exclusive supply of the most
                  precious resource in existence-a commodity capable of
                  unlocking humanity's greatest potential-only those who can
                  conquer their fear will survive.
                </p>
              </div>
              <div className="flex flex-row items-center justify-between pb-3">
                <div>
                  <RedButton
                    onClick={() => window.open(movie.imdb_url, "_blank")}
                  >
                    Download
                  </RedButton>
                </div>
                <div>
                  <button
                    className="text-center rounded-xl font-semibold px-[0.8vw] py-[0.5vw] hover:bg-red-800 bg-red-600 text-white"
                    onClick={handleFavoriteClick}
                  >
                    {isFavorite ? "Unfavorite" : "Favorite"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* trying to fetch the image data from api using baseurl + endpoint method */}
        {/* {console.log("Image URL:", imageUrl)}
            <div onClick={() => window.open(movie.imd_bUrl, "_blank")}>
              <img
                classNameName="absolute inset-0 transform w-full -translate-y-4"
                src={movie.image}
                alt={movie.movie}
              />
            </div> */}
        {/* <div onClick={() => window.open(movie.imd_bUrl, "_blank")}>
            <img class="absolute inset-0 transform w-full -translate-y-4" src={movie.image} alt={movie.movie}  />
            </div> */}

        <div onClick={() => window.open(movie.imd_bUrl, "_blank")}>
          <img
            className="absolute inset-0 transform w-full -translate-y-4 rounded-xl"
            src={MoviePoster}
            alt={movie.movie}
          />
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
