import { useSelector } from "react-redux";
import { Movie } from "./Movie";
import styles from "./css/MoviesList.module.css";
export const MoviesList = function () {
  const movies = useSelector(function (state) {
    return state.movies.movies;
  });

  const moviesContent = movies.map(function (movie) {
    return <Movie key={movie.id} movie={movie} />;
  });

  return <div className={styles["movies-list"]}>{moviesContent}</div>;
};
