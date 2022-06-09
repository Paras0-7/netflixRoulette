import { SearchPanel } from "../SearchPanel/SearchPanel";
import styles from "./css/Header.module.css";

export const Header = function () {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.header}>
        <div className={styles.heading}>
          <p>
            <strong>netflix</strong>roulette
          </p>
        </div>

        <SearchPanel className={styles.searchPanel} />
      </div>
    </>
  );
};
