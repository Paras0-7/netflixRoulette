import { useSelector } from "react-redux";
import { Movie } from "./Movie";
import styles from "./css/MoviesList.module.css";
import { SearchResults } from "../SearchPanel/SearchResults";
import ErrorBoundary from "../../error/ErrorBoundary";
export const MoviesList = function () {
  const movies = useSelector(function (state) {
    return state.movies.movies;
  });

  const loading = useSelector(function (state) {
    return state.movies.isLoading;
  });
  const moviesContent = movies.map(function (movie) {
    return <Movie key={movie.id} movie={movie} />;
  });

  return (
    <>
      <SearchResults />
      <ErrorBoundary>
        {loading && (
          <div className={styles.loading}>
            <p>Loading Movies ......</p>
          </div>
        )}
        {!loading && movies.length > 0 && (
          <div className={styles["movies-list"]}>{moviesContent}</div>
        )}
        {!loading && movies.length === 0 && (
          <div className={styles["not-found"]}>
            <p>No movies Found</p>
          </div>
        )}
      </ErrorBoundary>
    </>
  );
};
