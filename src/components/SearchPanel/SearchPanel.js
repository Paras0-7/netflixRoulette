import styles from "./css/SearchPanel.module.css";
import { Button } from "../UI/Button";

export const SearchPanel = function (props) {
  const classes = `${props.className} ${styles["search-panel"]}`;
  return (
    <section className={classes}>
      <form>
        <label> Find Your Movie</label>
        <input type="text" />
        <Button>Search</Button>
      </form>
    </section>
  );
};
