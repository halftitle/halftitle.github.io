import styles from "../page.module.css";

export default function About() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.spiral}>
                    <img src="/halfspiral.png" alt="spiral" width="250"></img>
                </div>
                <div className={styles.about}>
                    <p>welcome to the half title super secret zine world</p>
                    <p>by charlotte alarie</p>
                    <p>website by yanna jaskielewicz</p>
                </div>
            </main>
            <footer className={styles.footer}>
                <a href="/">
                    {'< back'}
                </a>
        </footer>
        </div>
    );
}