import { useState } from "react";
import Image from "next/image";
import styles from "./ImageCarousel.module.css";

export default function ImageCarousel({ images, style = {} }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => {
        setCurrentIndex(i => (i === 0 ? images.length - 1 : i - 1));
    };

    const next = () => {
        setCurrentIndex(i => (i === images.length - 1 ? 0 : i + 1));
    };

    if (!images || images.length === 0) return null;

    return (
        <div className={styles.carouselContainer} style={style}>
            <button onClick={prev} className={styles.navButton}> {'<-'} </button>
            <div className={styles.imageWrapper}>
                <div className={styles.carouselImages} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((img, index) => (
                        <div className={styles.imageContainer} key={index}>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={650}
                                height={400}
                                className={styles.image}
                                loading={index === currentIndex || index === (currentIndex + 1) % images.length ? "eager" : "lazy"}
                                priority={index === currentIndex}
                            />
                        </div>
                    ))};
                </div>
            </div>
            <button onClick={next} className={styles.navButton}> {'->'} </button>
        </div>
    );
};