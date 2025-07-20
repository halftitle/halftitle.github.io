import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          half title
        </h1>

        <div className ="header-dots">
          <span>*</span>
          <span>*</span>
          <span>*</span>
        </div>

        <div className="zines">
          <div className="zine-header">
            <a href="https://4pp1361r1.github.io/index.html">
              apple girl
            </a>
            <p>
              (2024)
            </p>
          </div>

          <div className="zine-header">
            <a href="">
              saunatown
            </a>
            <p>
              (2025)
            </p>
          </div>
        </div>

      </main>
      <footer className={styles.footer}>
        <a href="">
          about
        </a>
      </footer>
    </div>
  );
}
