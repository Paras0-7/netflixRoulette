import { Button } from "../UI/Button";
import styles from "./css/SearchResults.module.css";
import { useSelector, useDispatch } from "react-redux";
import { buttonActions } from "../../redux/slices/buttonSlice";
import { useButtonState } from "../../hooks/buttonStateHook";

export const SearchResults = function () {

   const {btn1,useButtonState();
  const dispatch = useDispatch();
  const btn1 = useSelector(function (state) {
    return state.button.btn1;
  });
  const btn2 = useSelector(function (state) {
    return state.button.btn2;
  });

  const btn1Styles = `${styles.actions} ${btn1 ? styles.active : ""} ${
    styles.btn1
  }`;
  const btn2Styles = `${styles.actions} ${btn2 ? styles.active : ""} ${
    styles.btn2
  }`;
  const clickHandler = function (event) {
    // console.log(event.target.value);
    if (event.target.id === "1") {
      dispatch(buttonActions.setBtn1Active());
    } else {
      dispatch(buttonActions.setBtn2Active());
    }
  };

  return (
    <div className={styles.results}>
      <p className={styles.text}>6 Results Found</p>
      <div className={styles.sort}>
        <p>Sort By</p>
        <div>
          <Button
            id="1"
            value="title"
            onClick={clickHandler}
            className={btn1Styles}
          >
            Release Date
          </Button>
          <Button
            id="2"
            value="genre"
            onClick={clickHandler}
            className={btn2Styles}
          >
            Rating
          </Button>
        </div>
      </div>
    </div>
  );
};
