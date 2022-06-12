import { click } from "@testing-library/user-event/dist/click";
import { Button } from "../UI/Button";
import styles from "./css/SearchFilter.module.css";
import { useState } from "react";

export const SearchFilter = function () {
  const [active, isActive] = useState(false);

  const btn1 = `${styles.actions}  ${styles.btn1}`;
  const btn2 = `${styles.actions} ${styles.btn2}`;
  const clickHandler = function (event) {};

  return (
    <div className={styles.filter}>
      <p>Search By</p>
      <div>
        <Button id="1" onClick={clickHandler} className={btn1}>
          Title
        </Button>
        <Button id="2" onClick={clickHandler} className={btn2}>
          Genre
        </Button>
      </div>
    </div>
  );
};
