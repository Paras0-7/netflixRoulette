import styles from "./css/SearchPanel.module.css";
import { Button } from "../UI/Button";

export const HeroSection = function () {
  return (
    <section className={styles["search-panel"]}>
      <div className={styles.background}></div>
      <div className={styles.search}>
        <p>
          <strong>netflix</strong>roulette
        </p>
        <form className={styles.form}>
          <div className={styles["main-div"]}>
            <label className={styles.label} htmlFor="movie">
              Find Your Movie
            </label>
            <div className={styles.div1}>
              <input id="movie" />
              <Button className={styles["search-btn"]}>Search</Button>
            </div>
          </div>
          <div className={styles.div2}>
            <label>Search By</label>
            <div>
              <Button value="title">Title</Button>
              <Button value="genre">Genre</Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
