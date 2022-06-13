import styles from "./css/Button.module.css";
export const Button = function (props) {
  const classes = `${styles.btn} + ${props.className}`;
  return (
    <button
      id={props.id}
      className={classes}
      onClick={props.onClick}
      value={props.value}
    >
      {props.children}
    </button>
  );
};
