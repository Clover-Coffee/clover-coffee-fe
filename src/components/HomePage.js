/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/homepage.module.css"

export default function HomePage({ coffees }) {
  const [topSellers, setTopSellers] = useState([]);
  const [coffee, setCoffee] = useState([]);

  async function fetchTopSellers() {
    let n = 3;
    const shuffled = coffees.sort(() => {
      return 0.5 - Math.random();
    });
    const selected = shuffled.slice(0, n);
    setTopSellers(selected);
    return selected;
  }

  useEffect(() => {
    fetchTopSellers();
  }, [coffees]);

  async function specificCoffee() {
    const response = await fetch(`http://localhost:8080/items/${id}`);
    const coffeeData = await response.json();
    setCoffee(coffeeData);
  }

  return (
    <div>
      <section className={styles.greeting}>
        <h1 className={styles.homeTitle}>Clover Coffee</h1>
      </section>
      <section className={styles.pictureContainer}>
        <section className={styles.ctaBtn}>
          <h2 className={styles.cta}>CALL TO ACTION</h2>
          <section className={styles.buttonSection}>
            <Link href="/shopall" style={{ textDecoration: "none" }}>
              <button className={styles.shopallButton}>Shop All</button>
            </Link>
          </section>
        </section>
      </section>
      <h2 className={styles.topsellerTitle}>TOP SELLERS</h2>
      <section className={styles.topsellerSection}>
        {topSellers.map((coffee) => {
          return (
            <li className={styles.coffee} key={coffee.id}>
              <Link
                href={`/coffee/${coffee.id}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  className={styles.randomizedImgs}
                  src={coffee.image}
                  alt={coffee.name}
                />
                <h3 className={styles.coffeeName}>{coffee.name.substring(0, 20)}</h3>
              </Link>
            </li>
          );
        })}
      </section>
    </div>
  );
}
