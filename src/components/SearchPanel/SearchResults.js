import { Button } from "../UI/Button";
import styles from "./css/SearchResults.module.css";

import { useButtonState } from "../../hooks/buttonStateHook";

export const SearchResults = function () {
  const { state, dispatchFn } = useButtonState();
  const { btn1, btn2 } = state;
  // console.log(btn1, btn2);

  const btn1Styles = `${styles.actions} ${btn1 ? styles.active : ""} ${
    styles.btn1
  }`;
  const btn2Styles = `${styles.actions} ${btn2 ? styles.active : ""} ${
    styles.btn2
  }`;
  const clickHandler = function (event) {
    // console.log(event.target.id);
    if (event.target.id === "1") {
      dispatchFn({
        type: "setBtn1Active",
      });
    } else {
      dispatchFn({
        type: "setBtn2Active",
      });
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
            value="date"
            onClick={clickHandler}
            className={btn1Styles}
          >
            Release Date
          </Button>
          <Button
            id="2"
            value="rating"
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
