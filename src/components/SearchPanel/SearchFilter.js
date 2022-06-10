import { Button } from "../UI/Button";
import styles from "./css/SearchFilter.module.css";

export const SearchFilter = function () {
  const btn1 = `${styles.actions} ${styles.active} ${styles.btn1}`;
  const btn2 = `${styles.actions} ${styles.btn2}`;
  return (
    <div className={styles.filter}>
      <p>Search By</p>
      <div>
        <Button className={btn1}>Title</Button>
        <Button className={btn2}>Genre</Button>
      </div>
    </div>
  );
};
