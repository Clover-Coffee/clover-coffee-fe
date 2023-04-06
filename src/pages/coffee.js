import React, { useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import UpdateItemModal from "./UpdateModal";
import Link from "next/link";




export function CoffeePage({ coffees, addToCart }) {
  const { id } = useParams();

  const navigate = useNavigate();

  const itemId = parseInt(id);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const onClose = () => {
    setShowModal(false);
    window.location.reload();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:8080/items/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price, image, brand }),
    });
    if (response.ok) {
      const coffee = await response.json();
      console.log("Coffee updated:", coffee);
    } else {
      console.error("Failed to update coffee:", response);
    }
  };
  
  const handleDelete = async (event) => {
    window.location.reload();
    const response = await fetch(`http://localhost:8080/items/${itemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const coffee = await response.json();
      console.log("coffee deleted:", coffee);
    } else {
      console.error("Failed to delete coffee:", response);
    }
  };



  for (let i = 0; i < coffees.length; i++) {
    if (coffees[i].id == id) {
      return (
        <div className="productPage">
          <section className="singularProduct">
            <div className="containerLeft">
              <img
                src={coffees[i].image}
                className="specificProductImg"
                alt={coffees[i].name}
              />
              <div className="product-buttons">
                <button className="productButton" onClick={handleClick}>
                  Update Item
                </button>
                <button onClick={handleDelete} className="productButton">Delete Item</button>
                <button className="productButton" onClick={() => navigate("/shopall")}>
                  Go Back
                </button>
              </div>

              {showModal && (
                <UpdateItemModal
                  setName={setName}
                  setDescription={setDescription}
                  setPrice={setPrice}
                  handleSubmit={handleSubmit}
                  name={name}
                  description={description}
                  price={price}
                  image={image}
                  setImage={setImage}
                  brand={brand}
                  setBrand={setBrand}
                  coffees={coffees[i]}
                  onClose={onClose}
                />
              )}
            </div>
            <div className="productDescription">
              <h1 className="productTitle">{coffees[i].name}</h1>
              <p className="productPrice">${coffees[i].price}</p>
              <div className="productSpecs">
                <p>
                  {" "}
                  <span>Product Description:</span> {coffees[i].description}
                </p>
              </div>
              <div className="cartButtons">
                <Button
                  onClick={() => addToCart(coffees[i].id)}
                  variant="dark"
                  size="md"
                  className="mt-4 w-100 addToCartBtn"
                >
                  Add to Cart
                </Button>
                <Link href="/cart">
                  <Button variant="dark" size="md" className="mt-4 w-100">
                    View Cart
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}
