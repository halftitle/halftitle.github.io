import styles from "../page.module.css";

export default function About() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.spiral}>
                    <picture>
                        <source srcSet="/halfspiral-black.png" media="(prefers-color-scheme: light)"/>
                        <source srcSet="/halfspiral-white.png" media="(prefers-color-scheme: dark)"/>
                        <img src="/halfspiral black.png" alt="half title spiral" width="200"></img>
                    </picture>
                </div>
                <div className={styles.about}>
                    <p>welcome to half title zine world!</p>
                    <p>half title was born to be a centralized access point for the zines made by a community of talented creators. every project here is non-profit, open submission, and volunteer-based (we do this just for fun).</p>
                    <p>web dev creds to yanna jaskielewicz.</p>
                    <p>organization + compilation by charlotte alarie.</p>
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
