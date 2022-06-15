import { useSelector } from "react-redux";
import { Movie } from "./Movie";
import styles from "./css/MoviesList.module.css";
import { SearchResults } from "../SearchPanel/SearchResults";
export const MoviesList = function () {
  const movies = useSelector(function (state) {
    return state.movies.movies;
  });

  const moviesContent = movies.map(function (movie) {
    return <Movie key={movie.id} movie={movie} />;
  });

  return (
    <>
      <SearchResults />
      {movies.length > 0 && (
        <div className={styles["movies-list"]}>{moviesContent}</div>
      )}
      {movies.length === 0 && (
        <div className={styles["not-found"]}>
          <p>No movies Found</p>
        </div>
      )}
    </>
  );
};
