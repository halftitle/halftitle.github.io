import styles from "./third-thing.module.css";

export default function ThirdThing() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <header className={styles.header}>
          <h1 className={styles.title}>third thing</h1>
          <p className={styles.callout}>CALL FOR CREATIVE SUBMISSIONS!!!</p>
        </header>

        <main className={styles.main}>

          <section>
            <p>This zine celebrates the works of talented creators by bringing together a short and freely-accessible multimedia booklet of art, ideas, stories, and feelings.</p>
            <p>Throughout the formatting process there will be communication between the artists and the editors, to ensure all art is authentically represented. The final zine will be displayed on this website. Physical copies will be sold not-for-profit (only to cover the cost of printing), and artist's copies will be provided.</p>
            <p>Explore the theme and submission details to see if submitting to this third edition of <em>half title</em> speaks to you. Email (<a href="mailto:half05title@gmail.com">half05title@gmail.com</a>), or dm (<a href="https://instagram.com/05title" target="_blank" rel="noreferrer">@05title</a>) for questions, concerns, to chat, etc... Suggestions to make this project better are welcomed!</p>
            <img className={styles.vennImg} src="/thirdthing.png" width="300" alt="third thing"/>
          </section>

          <section>
            <p><span className={styles.sectionLabel}>THEME:</span> third thing  is a triplet, a trio, the rule of thirds, triangulation, an asterism, a trilogy, terza rima, thus, therefore, ellipsis... </p>
          </section>

          <section>
            <p><span className={styles.sectionLabel}>SUBMISSIONS:</span> Submissions are open to anything you've ever made related to the theme, displayable in print. Open to: photography, poetry, doodle, short prose, design, comic, painting, music, recipe, and beyond... Submissions are ideally kept to two pages max., due to space and layout constraints.</p>
            <div className={styles.guidelines}>
              <p><span className={styles.sectionLabel}>Please include in your submission email:</span></p>
              <ul>
                <li>Your name, as you wish to be credited</li>
                <li>High quality files of your piece(s)</li>
                <li>Title, year, medium of each work</li>
                <li>Artist statement (optional)</li>
                <li>Your social media handle / website (also optional)</li>
                <li>Any other considerations or preferences</li>
              </ul>
            </div>
          </section>

        </main>

        <footer className={styles.footer}>
          <p>EXTENDED DEADLINE FOR SUBMISSIONS (email to <a href="mailto:half05title@gmail.com">half05title@gmail.com</a>):</p>
          <p className={styles.dateHighlight}>FRIDAY, JULY 3</p>
          <a className={styles.back} href="/">{"< back"}</a>
        </footer>

      </div>
    </div>
  );
}
