import React, {useState} from "react";
import { Button } from "react-bootstrap";
import AddModal from "../components/AddModal";


const ShopAll = ({ items }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");

  const handleClick = () => {
    setShowModal(!showModal);
    console.log(showModal)
  }
  const onClose = () => {
    setShowModal(false);
    window.location.reload();
  };

  const addItems = async (event) => {
    window.location.reload();
    console.log('clicked')
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

  console.log(items);


  const stumpsCoffee = items.filter((item) => item.brand === "stumptown");
  const colombesCoffee = items.filter((item) => item.brand === "lacolombe");
  const partnersCoffee = items.filter((item) => item.brand === "partners");
  

  return (
    <div className="productsContainer">
      <section className="products-section">
        <h2 id="featured-title">Stumptown Coffee</h2>
        Carousel goes here

        {/* <Carousel items={stumpsCoffee} /> */}
      </section>
      <section className="products-section">
        <h2 id="featured-title">La Colombe Coffee</h2>
        Carousel goes here

        {/* <Carousel items={colombesCoffee} /> */}
      </section>
      <section className="products-section">
        <h2 id="featured-title">Partners Coffee</h2>
        Carousel goes here
        {/* <Carousel items={partnersCoffee} /> */}
      </section>
      
      <Button onClick={handleClick}  variant="dark" size="md" className="mt-4 w-100">
      ADD ITEM
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
  );
};

ShopAll.getInitialProps = async () => {
  const res = await fetch('http://localhost:8080/items');
  const items = await res.json();

  return { items };
};

export default ShopAll;
