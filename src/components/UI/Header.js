import { SearchPanel } from "../SearchPanel/SearchPanel";
import styles from "./css/Header.module.css";
import { Link } from "react-router-dom";
export const Header = function () {
  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        <Link to="/" className={styles.home}>
          <p>
            <strong>netflix</strong>roulette
          </p>
        </Link>
      </div>

      <SearchPanel className={styles.searchPanel} />
    </div>
  );
};
