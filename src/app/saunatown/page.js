"use client";

import Image from "next/image";
import ImageCarousel from "../../components/ImageCarousel";
import styles from "./styles.css";

const images = [
    { src: "/saunatown/saunatown-1-frontcover.png", alt: "front cover" },
    { src: "/saunatown/saunatown-2-frontinner.png", alt: "inner front cover" },
    { src: "/saunatown/saunatown-3-credit.png", alt: "credits" },
    { src: "/saunatown/saunatown-4.png", alt: "page 1" },
    { src: "/saunatown/saunatown-5.png", alt: "page 3" },
    { src: "/saunatown/saunatown-6.png", alt: "page 5" },
    { src: "/saunatown/saunatown-7.png", alt: "page 7" },
    { src: "/saunatown/saunatown-8.png", alt: "page 9" },
    { src: "/saunatown/saunatown-9.png", alt: "page 11" },
    { src: "/saunatown/saunatown-10.png", alt: "page 13" },
    { src: "/saunatown/saunatown-11.png", alt: "page 15" },
    { src: "/saunatown/saunatown-12.png", alt: "page 17" },
    { src: "/saunatown/saunatown-13.png", alt: "page 19" },
    { src: "/saunatown/saunatown-14.png", alt: "page 21" },
    { src: "/saunatown/saunatown-15.png", alt: "page 23" },
    { src: "/saunatown/saunatown-16.png", alt: "page 25" },
    { src: "/saunatown/saunatown-17.png", alt: "page 27" },
    { src: "/saunatown/saunatown-18-backinner.png", alt: "inner back cover" },
    { src: "/saunatown/saunatown-19-backcover.png", alt: "back cover" },
];

export default function Saunatown() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <header className={styles.header}>
                    <a href="/saunatown">
                        <Image src="/saunatown/saunatown-logo-white.png" alt="saunatown zine" width={300} height={200} />
                    </a>
                </header>
                <ImageCarousel images={images} style={{ fontFamily: "'Roboto Mono', monospace" }} navColor="#fff" />
                <div className="credits">
                    <p>Kyle Alaan-Nguyen</p>
                    <p>Charlotte Alarie</p>
                    <p>Frankie Alarie</p>
                    <p><a href="mailto:8asrielxx@gmail.com">Asriel</a></p>
                    <p><a href="https://instagram.com/foxgloves_333">Daniel Bezerra</a></p>
                    <p><a href="https://instagram.com/chloecha_">Chloe Cha</a></p>
                    <p>Miranda Chance</p>
                    <p><a href="https://www.instagram.com/rubylfaris/">Ruby Faris</a></p>
                    <p><a href="https://instagram.com/taylordfranks">Taylor Franks</a></p>
                    <p><a href="https://thomasfrenette.bandcamp.com">Thomas Frenette</a></p>
                    <p><a href="https://yannajask.com">Yanna Jaskielewicz</a></p>
                    <p>Kasen Korstanje</p>
                    <p><a href="https://instagram.com/yem_ly">Zoe Lee</a></p>
                    <p>Sylvie Liss</p>
                    <p>Kyra Meier</p>
                    <p>Drew Newell</p>
                    <p>H.A. Porfiri</p>
                    <p><a href="https://instagram.com/x.lm.nl">Zoe Sexton</a></p>
                    <p>Aria Van Allen</p>
                    <p><a href="https://instagram.com/siporawest">Sipora West</a></p>
                    <p><a href="https://instagram.com/m4r94ux">Margaux Wilkinson</a></p>
                    <p><a href="https://www.instagram.com/dianayamadaaa/">Diana Yamada</a></p>
                </div>
            </main>
            <footer>
                <div className="access">
                    <a href="https://drive.google.com/drive/folders/1b3YTUG6MS25TIIBZg-2ySjX6pD1wZwvF?usp=drive_link">
                        Access in Google Drive
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfe1OOl0-pn-BtKuy05QPB89fd7qHmrIoZebChHImzRbrB6Kw/viewform">
                        Order a physical copy
                    </a>
                </div>
                <p>Summer 2025</p>
                <div className="return">
                    <a href="/">
                        {'< Back'}
                    </a>
                </div>
            </footer>
        </div>
    );
}