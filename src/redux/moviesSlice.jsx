import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  movies: [],
  favoriteMovies: [],
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get(process.env.REACT_APP_MOVIES_API_URL);
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const isFavorite = state.favoriteMovies.find(m => m.id === movie.id);
      if (isFavorite) {
        state.favoriteMovies = state.favoriteMovies.filter(m => m.id !== movie.id);
      } else {
        state.favoriteMovies.push(movie);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.sort((a, b) => b.rating - a.rating);
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;
