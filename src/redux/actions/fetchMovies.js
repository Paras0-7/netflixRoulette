import { movieActions } from "../slices/moviesSlice";
export const fetchMovies = function (
  search = "",
  searchBy,
  sortBy,
  sortOrder = "desc"
) {
  return async function (dispatch) {
    const fetchData = async function () {
      const queries = `${
        searchBy === "title" ? `search=${search}` : `filter=${search}`
      }&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
      const response = await fetch(
        `https://reactjs-cdp.herokuapp.com/movies?${queries}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch movies!! Please try again.");
      }

      const data = await response.json();

      return data;
    };

    // let x = 1;
    // const checkImage = async function (url) {
    //   var img = await fetch(url);
    //   console.log(x++);
    //   console.log(img);
    // };

    try {
      dispatch(movieActions.setError(false));
      dispatch(movieActions.setIsLoading(true));
      let moviesData = await fetchData();
      moviesData = moviesData.data;
      console.log(moviesData);
      const movies = moviesData.map(function (movie) {
        // console.log(movie.vote_average);
        return {
          id: movie.id,
          overview: movie.overview,
          image: movie.poster_path,
          releaseDate: movie.release_date,
          runtime: movie.runtime,
          tagLine: movie.tagline,
          title: movie.title,
          rating: movie.vote_average.toFixed(1),

          genres: movie.genres,
        };
      });

      // movies.map(async function (movie) {
      //   await checkImage(movie.image);
      // });

      dispatch(movieActions.loadMovies(movies));
    } catch (err) {
      dispatch(movieActions.setError(true));
    } finally {
      dispatch(movieActions.setIsLoading(false));
    }
  };
};
