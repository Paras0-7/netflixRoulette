import { useButtonState } from "../../hooks/buttonStateHook";
import { Button } from "../UI/Button";
import { useDispatch } from "react-redux";
import styles from "./css/SearchFilter.module.css";
import { movieActions } from "../../redux/slices/moviesSlice";

export const SearchFilter = function () {
  const { state, dispatchFn } = useButtonState();
  const { btn1, btn2 } = state;

  const dispatch = useDispatch();

  const btn1Styles = `${styles.actions} ${btn1 ? styles.active : ""} ${
    styles.btn1
  }`;
  const btn2Styles = `${styles.actions} ${btn2 ? styles.active : ""} ${
    styles.btn2
  }`;
  const clickHandler = function (event) {
    // console.log(event.target.value);
    if (event.target.id === "1") {
      dispatchFn({ type: "setBtn1Active" });
    } else {
      dispatchFn({
        type: "setBtn2Active",
      });
    }
    // console.log(event.target.value);
    // console.log("here ", event.target.value);
    dispatch(movieActions.setQuery({ searchBy: event.target.value }));
  };

  return (
    <div className={styles.filter}>
      <p>Search By</p>
      <div>
        <Button
          id="1"
          value="title"
          onClick={clickHandler}
          className={btn1Styles}
        >
          Title
        </Button>
        <Button
          id="2"
          value="genres"
          onClick={clickHandler}
          className={btn2Styles}
        >
          Genre
        </Button>
      </div>
    </div>
  );
};
