/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";

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
    if (currentIndex < length - 3) {
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
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {coffees.map((coffee) => {
              return (
                <div key={coffee.id}>
                  <Link
                    href={`/product/${coffee.id}`}
                    style={{ textDecoration: "none" }}
                  >
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
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
