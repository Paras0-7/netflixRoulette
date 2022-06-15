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
      console.log(query);
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
      </Link>

      {isEmpty && <SearchPanel className={styles.searchPanel} />}
      {!isEmpty && <MovieData movie={movie} />}
    </div>
  );
};
