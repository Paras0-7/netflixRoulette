import styles from "./css/SearchPanel.module.css";
import { Button } from "../UI/Button";
import { SearchFilter } from "./SearchFilter";

export const SearchPanel = function (props) {
  const classes = `${props.className} ${styles["search-panel"]}`;
  return (
    <section className={classes}>
      <form className={styles.form}>
        <label> Find Your Movie</label>
        <div className={styles.input}>
          <input type="text" />
          <Button className={styles.btn}>Search</Button>
        </div>

        <SearchFilter />
      </form>
    </section>
  );
};
