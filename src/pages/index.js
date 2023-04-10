import HomePage from "@/components/HomePage";
import React, { useState, useEffect } from "react";
import API_BASE_URL from "../../config";

export async function getStaticProps() {
  const res = await fetch(`${API_BASE_URL}/items`);
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
      const response = await fetch(`${API_BASE_URL}/items`);
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
