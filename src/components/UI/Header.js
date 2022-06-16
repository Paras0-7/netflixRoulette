import { SearchPanel } from "../SearchPanel/SearchPanel";
import { MovieData } from "./../Movies/MovieData";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { fetchMovies } from "../../redux/actions/fetchMovies";
import styles from "./css/Header.module.css";
import { Link } from "react-router-dom";
import { movieActions } from "../../redux/slices/moviesSlice";

export const Header = function () {
  const dispatch = useDispatch();
  const queryState = useSelector(function (state) {
    return state.movies.queryState;
  });

  const sortBy = useSelector(function (state) {
    return state.movies.sortBy;
  });
  const { query, searchBy } = queryState;

  useEffect(
    function () {
      // console.log(query);
      dispatch(fetchMovies(query, searchBy, sortBy));
    },
    [dispatch, query, searchBy, sortBy]
  );
  const movie = useSelector((state) => {
    return state.movies.movie;
  });

  const clickHandler = function () {
    dispatch(movieActions.loadMovie({}));
  };
  const isEmpty = Object.keys(movie).length === 0;

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.home} onClick={clickHandler}>
        <p className={styles.heading}>
          <strong>netflix</strong>roulette
        </p>
        {!isEmpty && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        )}
      </Link>

      {isEmpty && <SearchPanel className={styles.searchPanel} />}
      {!isEmpty && <MovieData movie={movie} />}
    </div>
  );
};
