import HomePage from "@/components/HomePage";
import React, { useState, useEffect } from "react";

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/items");
  const coffees = await res.json();

  return {
    props: {
      coffees,
    },
  };
}

export default function Home({ coffees }) {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  async function fetchItems() {
    try {
      const response = await fetch(`http://localhost:8080/items`);
      const itemsData = await response.json();
      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }
  const addToCart = (id) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        setCart((prevCart) => [...prevCart, items[i]]);
        break;
      }
    }
  };
  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
        <main className="appContainer">
          <div className="mainContainer">
            <HomePage coffees={coffees} />
          </div>
        </main>
    </div>
  );
}
