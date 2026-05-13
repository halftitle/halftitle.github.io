"use client";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const zines = document.querySelectorAll("[data-index]");
    const bgImgs = document.querySelectorAll("[data-bg]");
    const isTouch = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const isMobile = window.innerWidth <= 600;

    if (isTouch || isMobile) {
      bgImgs.forEach(img => { img.style.opacity = '0'; });
      return;
    }

    zines.forEach(zine => {
      const idx = parseInt(zine.dataset.index);

      zine.addEventListener("mouseenter", () => {
        bgImgs.forEach(img => img.classList.remove(styles.lit));
        const img = bgImgs[idx];
        img.style.width = (Math.random() * 30 + 25) + 'vw';
        img.style.left = (Math.random() * (window.innerWidth - img.offsetWidth)) + 'px';
        img.style.top = (Math.random() * (window.innerHeight - img.offsetHeight)) + 'px';
        img.style.right = 'auto';
        img.style.bottom = 'auto';
        img.classList.add(styles.lit);
      });

      zine.addEventListener("mouseleave", () => {
        bgImgs[idx].classList.remove(styles.lit);
      });
    });
  }, []);

  return (
    <div className={styles.page}>

      <div className={styles.bgImages}>
        <img data-bg className={styles.bgImg} src="/apple-girl.png" alt="" />
        <img data-bg className={styles.bgImg} src="/saunatown.png" alt="" />
        <img data-bg className={styles.bgImg} src="/thirdthing.png" alt="" />
      </div>

      <main className={styles.main}>
        <div className="header">
          <picture>
            <source srcSet="/halfspiral-black.png" media="(prefers-color-scheme: light)"/>
            <source srcSet="/halfspiral-white.png" media="(prefers-color-scheme: dark)"/>
            <img src="/halfspiral-black.png" alt="half title spiral" width="100"/>
          </picture>
          <h1>half title</h1>
        </div>

        <div className="zines">
          <div className="zine-header" data-index="0">
            <img className={styles.zineMobileImg} src="/apple-girl.png" alt="apple girl"/>
            <a href="/apple-girl">apple girl</a>
            <p>(2024)</p>
          </div>
          <div className="zine-header" data-index="1">
            <img className={styles.zineMobileImg} src="/saunatown.png" alt="saunatown"/>
            <a href="/saunatown">saunatown</a>
            <p>(2025)</p>
          </div>
          <div className="zine-header" data-index="2">
            <img className={styles.zineMobileImg} src="/thirdthing.png" alt="third thing"/>
            <a href="/third-thing">third thing</a>
            <p>(2026)</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/about">about</a>
        <span className={styles.separator}>*</span>
        <a href="mailto:half05title@gmail.com">half05title@gmail.com</a>
        <span className={styles.separator}>*</span>
        <a href="https://www.instagram.com/05title">@05title</a>
      </footer>

    </div>
  );
}