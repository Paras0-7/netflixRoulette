import styles from "./css/SearchPanel.module.css";
import { Button } from "../UI/Button";
import { SearchFilter } from "./SearchFilter";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieActions } from "../../redux/slices/moviesSlice";

export const SearchPanel = function (props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchQuery = useRef("");
  const classes = `${props.className} ${styles["search-panel"]}`;

  const submitHandler = function (event) {
    event.preventDefault();
    console.log("here form submit");
    dispatch(
      movieActions.setQuery({
        query: searchQuery.current.value,
      })
    );
    if (searchQuery.current.value === "") {
      navigate("/");
    } else
      navigate(`/search/${searchQuery.current.value}
    `);
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
