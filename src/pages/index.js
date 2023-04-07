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

  async function fetchItems() {
    try {
      const response = await fetch(`http://localhost:8080/items`);
      const itemsData = await response.json();
      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

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
