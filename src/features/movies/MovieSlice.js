import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import axios from "axios";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await MovieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    console.log("the response", response);
    return response.data;
  }
);
export const fetchForCar = createAsyncThunk("movies/fetchForCar", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
  );
  return response.data.results;
  console.log(response.data.results);
});
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await MovieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    console.log("the response", response);
    return response.data;
  }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    console.log("the response", response);
    return response.data;
  }
);
export const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
    forCar: {},
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("fetch sucessfully");
      return { ...state, movies: action.payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      console.log("fetch sucessfully");
      return { ...state, shows: action.payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, action) => {
      console.log("fetch sucessfully");
      return { ...state, selectedMovieOrShow: action.payload };
    },
    [fetchForCar.fulfilled]: (state, action) => {
      console.log("fetch sucessfully cszr", action.payload);
      return {...state,forCar:[action.payload]}
    },
  },
});
export const { addMovies } = MovieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllCar = (state) => state.movies.forCar;

export const getSelectedMovieorShow = (state) =>
  state.movies.selectedMovieOrShow;
export default MovieSlice.reducer;
