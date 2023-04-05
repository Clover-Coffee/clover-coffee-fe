/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";

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
    <div className="homepage">
      <section className="greeting">
        <h1 id="home-title">Clover Coffee</h1>
      </section>
      <section className="picture-container">
        <section className="cta-btn">
          <h2 className="cta">CALL TO ACTION</h2>
          <section className="button-section">
            <Link href="/shopall" style={{ textDecoration: "none" }}>
              <button className="shopall-button">Shop All</button>
            </Link>
          </section>
        </section>
      </section>
      <h2 id="topseller-title">TOP SELLERS</h2>
      <section className="topseller-section">
        {topSellers.map((coffee) => {
          return (
            <li className="coffee" key={coffee.id}>
              <Link
                href={`/coffee/${coffee.id}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  className="randomizedImgs"
                  src={coffee.image}
                  alt={coffee.name}
                />
                <h3 className="coffeeName">{coffee.name.substring(0, 20)}</h3>
              </Link>
            </li>
          );
        })}
      </section>
    </div>
  );
}
