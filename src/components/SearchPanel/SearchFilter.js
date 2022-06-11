import { click } from "@testing-library/user-event/dist/click";
import { Button } from "../UI/Button";
import styles from "./css/SearchFilter.module.css";

export const SearchFilter = function () {
  const btn1 = `${styles.actions} ${styles.active} ${styles.btn1}`;
  const btn2 = `${styles.actions} ${styles.btn2}`;
  const clickHandler = function (event) {
    console.log(event.target);
    // const activeBtn = document.querySelector(".active");
    // activeBtn.classList.remove("active");
    // event.target.classList.add("active");
    // console.log("click");
  };
  return (
    <div className={styles.filter}>
      <p>Search By</p>
      <div>
        <Button onClick={clickHandler} className={btn1}>
          Title
        </Button>
        <Button onClick={clickHandler} className={btn2}>
          Genre
        </Button>
      </div>
    </div>
  );
};
