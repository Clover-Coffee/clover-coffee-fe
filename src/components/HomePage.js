import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function HomePage({ items }) {
  const [topSellers, setTopSellers] = useState([]);
  const [coffee, setCoffee] = useState([]);

  async function fetchTopSellers() {
    let n = 3;
    const shuffled = items.sort(() => {
      return 0.5 - Math.random();
    });
    const selected = shuffled.slice(0, n);
    setTopSellers(selected);
    return selected;
  }

  useEffect(() => {
    fetchTopSellers();
  }, [items]);

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
            <Link to="/shopall" style={{ textDecoration: "none" }}>
              <button className="shopall-button">Shop All</button>
            </Link>
          </section>
        </section>
      </section>
      <h2 id="featured-title">TOP SELLERS</h2>
      <section className="featured-section">
        {topSellers.map((item) => {
          return (
            <li className="coffee" key={item.id}>
              <Link
                to={`/coffee/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  className="randomizedImgs"
                  src={item.image}
                  alt={item.name}
                />
                <h3 className="coffeeName">{item.name.substring(0, 20)}</h3>
              </Link>
            </li>
          );
        })}
      </section>
    </div>
  );
}
