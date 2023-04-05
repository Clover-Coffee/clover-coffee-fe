import HomePage from "@/components/HomePage";
import React, {useState, useEffect} from 'react';

export default function Home() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
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
    <main className="appContainer">
      <div className="mainContainer">
        <HomePage coffees={items}/>
      </div>
    </main>
  );
}
