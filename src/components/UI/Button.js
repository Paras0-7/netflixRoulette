import styles from "./css/Button.module.css";
export const Button = function (props) {
  const classes = `${styles.btn} + ${props.className}`;
  return <button className={classes}>{props.children}</button>;
};
