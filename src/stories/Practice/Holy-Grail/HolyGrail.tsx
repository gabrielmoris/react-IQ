import styles from "./holy-grail.module.css";

export default function HolyGrail() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>Header</header>
      <div className={styles.mainwrapper}>
        <nav className={styles.nav}>Navigation</nav>
        <main className={styles.main}>Main</main>
        <aside className={styles.aside}>Sidebar</aside>
      </div>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
