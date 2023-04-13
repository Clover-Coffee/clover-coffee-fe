/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/homepage.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import API_BASE_URL from "../../config";

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
    const response = await fetch(`${API_BASE_URL}/${id}`);
    const coffeeData = await response.json();
    setCoffee(coffeeData);
  }

  return (
    <div>
      <NavBar />
      <section className={styles.pictureContainer}>
        <section className={styles.ctaBtn}>
          <h2 className={styles.cta}>
            Taste the difference, one cup at a time.
          </h2>
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
                <h3 className={styles.coffeeName}>
                  {coffee.name.substring(0, 20)}
                </h3>
              </Link>
            </li>
          );
        })}
      </section>
      <section className={styles.brewGuides}>
        <h1 className={styles.brewText}>Brew Guides</h1>
        <div className={styles.brewLinks}>
          <div className={styles.brewLink}>
            <a
              href="https://counterculturecoffee.com/pages/quick-easy-pour-over"
              target="_blank"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0249/4283/7837/files/Coffee-Icons-Outline-Individual_Katilawave_edit_c49307a2-9c4b-4d11-aab9-f1e5076b4676_360x.png?v=1672775101"
                alt="Pour Over"
              />
              <span className={styles.brewText}>Pour Over</span>
            </a>
          </div>
          <div className={styles.brewLink}>
            <a
              href="https://counterculturecoffee.com/pages/quick-easy-french-press"
              target="_blank"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0249/4283/7837/files/Coffee-Icons-Outline-Individual_french-press_edit_360x.png?v=1672774158"
                alt="French Press"
              />
              <span className={styles.brewText}>French Press</span>
            </a>
          </div>
          <div className={styles.brewLink}>
            <a
              href="https://counterculturecoffee.com/pages/quick-easy-chemex"
              target="_blank"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0249/4283/7837/files/Frame-2_360x.png?v=1650577682"
                alt="Chemex"
              />
              <span className={styles.brewText}>Chemex</span>
            </a>
          </div>
          <div className={styles.brewLink}>
            <a
              href="https://counterculturecoffee.com/pages/quick-easy-v60"
              target="_blank"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0249/4283/7837/files/Coffee-Icons-Live-Stroke-Individual_Hario_V60_6a8093a7-629c-4cf5-b3c2-7832668228fb_360x.png?v=1673988739"
                alt="Hario V60"
              />
              <span className={styles.brewText}>Hario V60</span>
            </a>
          </div>
          <div className={styles.brewLink}>
            <a
              href="https://counterculturecoffee.com/pages/quick-easy-aeropress"
              target="_blank"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0249/4283/7837/files/Coffee-Icons-Outline-Individual_aeropress_edit_5a44b975-35ca-47ad-a3d2-b29343251d2e_360x.png?v=1672774227"
                alt="Aeropress"
              />
              <span className={styles.brewText}>Aeropress</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
