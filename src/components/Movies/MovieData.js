import styles from "./css/MovieData.module.css";
export const MovieData = function (props) {
  const { movie } = props;
  return (
    <div className={styles.movie}>
      <img src={props.movie.image} alt="Movie" />
      <div className={styles.info}>
        <div className={styles.title}>
          <p>{movie.title}</p>
          <p className={styles.rating}>
            {movie.rating > 0 ? movie.rating : 8.5}
          </p>
        </div>
        {movie.tagLine.length > 0 && (
          <p className={styles.tagline}>{movie.tagLine}</p>
        )}
        <div className={styles.date}>
          <p>{movie.releaseDate.split("-")[0]}</p>
          <p>{movie.runtime ? movie.runtime : 120} min</p>
        </div>

        <p className={styles.overview}>{movie.overview}</p>
      </div>
    </div>
  );
};
