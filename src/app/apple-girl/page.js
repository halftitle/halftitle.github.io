"use client";

import Image from "next/image";
import ImageCarousel from "../../components/ImageCarousel";
import styles from "./styles.css";

const images = [
    { src: "/apple-girl/cover.png", alt: "cover" },
    { src: "/apple-girl/credits.png", alt: "credits" },
    { src: "/apple-girl/applegirlcomic1.png", alt: "apple girl comic" },
    { src: "/apple-girl/applegirlcomic2.png", alt: "apple girl comic 2" },
    { src: "/apple-girl/secondwindsummer.png", alt: "second-wind summer" },
    { src: "/apple-girl/quiz.png", alt: "quiz" },
    { src: "/apple-girl/greenday.png", alt: "green day" },
    { src: "/apple-girl/linger.png", alt: "linger" },
    { src: "/apple-girl/grownups.png", alt: "grown ups" },
    { src: "/apple-girl/notebook.png", alt: "notebook 09/21/24" },
    { src: "/apple-girl/indreams.png", alt: "in dreams i gush because i must" },
    { src: "/apple-girl/betweentwotrees.png", alt: "between two trees" },
    { src: "/apple-girl/forlifecontinuing.png", alt: "for life continuing" },
    { src: "/apple-girl/whatscooking.png", alt: "what's cooking?" },
    { src: "/apple-girl/back.png", alt: "back" },
];

export default function Applegirl() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <header className={styles.header}>
                    <a href="/apple-girl">
                        <Image src="/apple-girl/banner.png" alt="apple girl zine" width={600} height={400} />
                    </a>
                </header>
                <ImageCarousel images={images} style={{fontFamily: "'Courier New', Courier, monospace"}} />
                <div className="credits">
                    <p>KYLE ALAAN-NGUYEN</p>
                    <p>CHARLOTTE ALARIE</p>
                    <p>FRANKIE ALARIE</p>
                    <p>ASRIEL (email: <a href="mailto:8asrielxx@gmail.com">8asrielxx@gmail.com</a>)</p>
                    <p>ZOLA BALL</p>
                    <p>SUNNY BELL (ig: <a href="https://www.instagram.com/sunnytbell">@sunnytbell</a>)</p>
                    <p>CHLOE CHA (ig: <a href="https://www.instagram.com/notchloecha">@notchloecha</a>)</p>
                    <p>MIRANDA CHANCE</p>
                    <p>JULIA COSTA</p>
                    <p>AVERY DANIEL (ig: <a href="https://www.instagram.com/averynailedthat">@averynailedthat</a>)</p>
                    <p>MASON ERTEL</p>
                    <p>MADI FENECH</p>
                    <p>THOMAS FRENETTE (ig: <a href="https://www.instagram.com/thomasfrent">@thomasfrent</a>)</p>
                    <p>JONAH GRAY (X: <a href="https://twitter.com/keithCozarts">@keithCozarts</a>)</p>
                    <p>EMILY HALPEN-BUIE</p>
                    <p>KAYDEN HENNIG</p>
                    <p>ELISE HOLBROOK</p>
                    <p>YANNA JASKIELEWICZ</p>
                    <p>KASEN KORSTANJE</p>
                    <p>ALEX KRUEGER</p>
                    <p>KHRISTA KRUEGER</p>
                    <p>ZOE LEE</p>
                    <p>SYLVIE LISS</p>
                    <p>EVELYN LOGAN (ig: <a href="https://www.instagram.com/ev_irl">@ev_irl</a>, URL: <a href="https://ev-irl.com">ev-irl.com</a>)</p>
                    <p>KYRA MEIER</p>
                    <p>BRIANNA MORE</p>
                    <p>LEO MUELLER</p>
                    <p>SOFIA OCCHIPINTI</p>
                    <p>GRACE PERRY-HOWARTH</p>
                    <p>H.A. PORFIRI</p>
                    <p>ZOE SEXTON (ig: <a href="https://www.instagram.com/_samjameswrites">@_samjameswrites</a>)</p>
                    <p>SIPORA WEST</p>
                    <p>MARGAUX WILKINSON (ig: <a href="https://www.instagram.com/m4r94ux">@m4r94ux</a>)</p>
                    <p>ABBY WYLAND</p>
                    <p>XR</p>
                </div>
            </main>
            <footer>
                <a href="https://drive.google.com/drive/folders/12feWPHXVXKQmS42ujKgV-NstbkMS7gYL?usp=sharing">
                    access in google drive
                </a>
                <p>nov 2024</p>
                <div className="return">
                    <a href="/">
                        {'< back'}
                    </a>
                </div>
            </footer>
        </div>
    );
}