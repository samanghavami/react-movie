import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const res = await movieApi
      .get(`?apikey=${APIKey}&s=${term}&type=movie`)
      .catch((err) => console.log(err));
    return res.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const res = await movieApi
      .get(`?apikey=${APIKey}&s=${term}&type=series`)
      .catch((err) => console.log(err));
    return res.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const res = await movieApi
      .get(`?apikey=${APIKey}&i=${id}&plot=full`)
      .catch((err) => console.log(err));
    return res.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovieOrShow: (state, { payload }) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetch Success Movies");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetch Success Shows");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetch Success MovieOrShow");
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import movieApi from "../../common/apis/movieApi";
// import { APIKey } from "../../common/apis/MovieApiKey";

// export const fetchAsyncMovies = createAsyncThunk(
//   "movies/fetchAsyncMovies",
//   async () => {
//     const movieText = "Harry";
//     const response = await movieApi.get(
//       `?apiKey=${APIKey}&s=${movieText}&type=movie`
//     );
//     return response.data;
//   }
// );

// export const fetchAsyncShows = createAsyncThunk(
//   "movies/fetchAsyncShows",
//   async () => {
//     const seriesText = "Friends";
//     const response = await movieApi.get(
//       `?apiKey=${APIKey}&s=${seriesText}&type=series`
//     );
//     return response.data;
//   }
// );

// export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
//   "movies/fetchAsyncMovieOrShowDetail",
//   async (id) => {
//     const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
//     return response.data;
//   }
// );

// const initialState = {
//   movies: {},
//   shows: {},
//   selectMovieOrShow: {},
// };

// const movieSlice = createSlice({
//   name: "movies",
//   initialState,
//   reducers: {
//     removeSelectedMovieOrShow: (state) => {
//       state.selectMovieOrShow = {};
//     },
//   },
//   extraReducers: {
//     [fetchAsyncMovies.pending]: () => {
//       console.log("Pending");
//     },
//     [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
//       console.log("Fetched Successfully!");
//       return { ...state, movies: payload };
//     },
//     [fetchAsyncMovies.rejected]: () => {
//       console.log("Rejected!");
//     },
//     [fetchAsyncShows.fulfilled]: (state, { payload }) => {
//       console.log("Fetched Successfully!");
//       return { ...state, shows: payload };
//     },
//     [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
//       console.log("Fetched Successfully!");
//       return { ...state, selectMovieOrShow: payload };
//     },
//   },
// });

// export const { removeSelectedMovieOrShow } = movieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
// export const getAllShows = (state) => state.movies.shows;
// export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
// export default movieSlice.reducer;
