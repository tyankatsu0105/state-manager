import { Outlet } from "react-router-dom";
import styles from "./presentational.module.css";
export const Presentational = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.heading}>Sandbox State Manager</h1>
    </header>
    <main className={styles.main}>
      <Outlet />
    </main>
    <footer className={styles.footer}>
      &copy;copyright 2023 tyankatsu. All rights reserved.
    </footer>
  </div>
);
