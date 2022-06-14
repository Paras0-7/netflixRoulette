import styles from "./css/Movie.module.css";
export const Movie = function (props) {
  return (
    <div className={styles.movie}>
      <img src={props.movie.image} alt="Movie" />
      <div className={styles.info}>
        <p>{props.movie.title}</p>
        <p className={styles.date}>{props.movie.releaseDate.split("-")[0]}</p>
      </div>
      <p className={styles.genres}>{props.movie.genres.join(", & ")}</p>
    </div>
  );
};
