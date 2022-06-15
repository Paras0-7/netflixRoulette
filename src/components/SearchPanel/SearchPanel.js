import styles from "./css/SearchPanel.module.css";
import { Button } from "../UI/Button";
import { SearchFilter } from "./SearchFilter";
import { useRef, useEffect } from "react";
import { fetchMovies } from "../../redux/actions/fetchMovies";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../redux/slices/moviesSlice";

export const SearchPanel = function (props) {
  const dispatch = useDispatch();

  const queryState = useSelector(function (state) {
    return state.movies.queryState;
  });

  const sortBy = useSelector(function (state) {
    return state.movies.sortBy;
  });
  const { query, searchBy } = queryState;

  const searchQuery = useRef("");
  const classes = `${props.className} ${styles["search-panel"]}`;

  useEffect(
    function () {
      // console.log(searchBy);
      dispatch(fetchMovies(query, searchBy, sortBy));
    },
    [dispatch, query, searchBy, sortBy]
  );

  const submitHandler = function (event) {
    event.preventDefault();
    // console.log("here form submit");

    dispatch(
      movieActions.setQuery({
        query: searchQuery.current.value,
      })
    );
  };
  return (
    <section className={classes}>
      <form onSubmit={submitHandler} className={styles.form}>
        <label> Find Your Movie</label>
        <div className={styles.input}>
          <input type="text" ref={searchQuery} />
          <Button value="title" className={styles.btn}>
            Search
          </Button>
        </div>

        <SearchFilter />
      </form>
    </section>
  );
};
