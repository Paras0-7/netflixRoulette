import styles from "./css/Movie.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { movieActions } from "../../redux/slices/moviesSlice";
export const Movie = function (props) {
  const dispatch = useDispatch();
  const clickHandler = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(movieActions.loadMovie(props.movie));
  };
  return (
    <Link
      to={`/movie/${props.movie.id}`}
      onClick={clickHandler}
      className={styles.movie}
    >
      <img src={props.movie.image} alt="Movie" />
      <div className={styles.info}>
        <p>{props.movie.title}</p>
        <p className={styles.date}>{props.movie.releaseDate.split("-")[0]}</p>
      </div>
      <p className={styles.genres}>{props.movie.genres.join(", & ")}</p>
    </Link>
  );
};
