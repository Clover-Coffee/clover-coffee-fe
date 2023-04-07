import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AddModal from "../components/AddModal";
import Layout from "@/components/Layout";
import Carousel from "@/components/Carousel";
import styles from "@/styles/shopall.module.css";

const ShopAll = ({ coffees }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");

  const handleClick = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };
  const onClose = () => {
    setShowModal(false);
    window.location.reload();
  };

  const addItems = async (event) => {
    window.location.reload();
    console.log("clicked");
    const response = await fetch(`http://localhost:8080/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price, image, brand }),
    });
    if (response.ok) {
      const item = await response.json();
      console.log("Item added:", item);
    } else {
      console.error("Failed to add item:", response);
    }
  };

  const stumpsCoffee = coffees.filter((item) => item.brand === "stumptown");
  const peetsCoffee = coffees.filter((item) => item.brand === "peets");
  const partnersCoffee = coffees.filter((item) => item.brand === "partners");
  const whitenoiseCoffee = coffees.filter(
    (item) => item.brand === "whitenoise"
  );

  return (
    <Layout>
      <div className="productsContainer">
        <section className="products-section">
          <h2 className={styles.featured}>Stumptown Coffee</h2>
          <Carousel coffees={stumpsCoffee} />
        </section>
        <section className="products-section">
          <h2 className={styles.featured}>Peets Coffee</h2>
          <Carousel coffees={peetsCoffee} />
        </section>
        <section className="products-section">
          <h2 className={styles.featured}>Partners Coffee</h2>
          <Carousel coffees={partnersCoffee} />
        </section>
        <section className="products-section">
          <h2 className={styles.featured}>White Noise Coffee</h2>
          <Carousel coffees={whitenoiseCoffee} />
        </section>

        <Button
          onClick={handleClick}
          variant="dark"
          size="md"
          className="mt-4 w-100"
        >
          ADD NEW COFFEE
        </Button>
        {showModal && (
          <AddModal
            setName={setName}
            setDescription={setDescription}
            setPrice={setPrice}
            handleClick={handleClick}
            name={name}
            description={description}
            price={price}
            brand={brand}
            setBrand={setBrand}
            image={image}
            setImage={setImage}
            onClose={onClose}
            addItems={addItems}
          />
        )}
      </div>
    </Layout>
  );
};

ShopAll.getInitialProps = async () => {
  const res = await fetch("http://localhost:8080/items");
  const coffees = await res.json();

  return { coffees };
};

export default ShopAll;
