/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Carousel.module.css";

const Carousel = (props) => {
  const { coffees } = props;
  // console.log(coffees);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(coffees.length);

  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setLength(coffees.length);
  }, [coffees]);

  const next = () => {
    if (currentIndex < length - 4) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className={styles["carousel-container"]}>
      <div className={styles["carousel-wrapper"]}>
        {currentIndex > 0 && (
          <button onClick={prev} className={styles["left-arrow"]}>
            &lt;
          </button>
        )}
        <div
          className={styles["carousel-content-wrapper"]}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={styles["carousel-content"]}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {coffees.map((coffee) => {
              return (
                <div key={coffee.id}>
                  <Link href={`/coffee/${coffee.id}`} passHref>
                    <img
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                      src={coffee.image}
                      alt="coffee-bag"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {currentIndex < length - 1 && (
          <button onClick={next} className={styles["right-arrow"]}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
