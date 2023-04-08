/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import UpdateItemModal from "@/components/UpdateModal";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styles from "../../styles/coffee.module.css";
import { CartContext } from "@/CartContext";


const Coffee = ({ coffees }) => {
	const router = useRouter();

	const { id } = router.query;

	const coffee = coffees.find((coffee) => coffee.id === parseInt(id));

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
	};
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const cartItem = { id: coffee.id, name: coffee.name, price: coffee.price, image: coffee.image, quantity: coffee.quantity };
    addItemToCart(cartItem);
  };

	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await fetch(`http://localhost:8080/items/${id}`, {
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
		const response = await fetch(`http://localhost:8080/items/${id}`, {
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

	return (
		<Layout>
			{coffee ? (
				<div className={styles.coffeePage}>
					<section className={styles.singularCoffee}>
						<div className={styles.containerLeft}>
							<img
								src={coffee.image}
								className={styles.specificCoffeeImg}
								alt={coffee.name}
							/>
							<div className={styles.coffeeButtons}>
								<button
									className={`${styles.coffeeButton} ${styles.button}`}
									onClick={handleClick}
								>
									Update Item
								</button>
								<button
									onClick={handleDelete}
									className={`${styles.coffeeButton} ${styles.button}`}
								>
									Delete Item
								</button>
								<button
									className={`${styles.coffeeButton} ${styles.button}`}
									onClick={() => router.push("/shopall")}
								>
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
									coffees={coffees}
									onClose={onClose}
								/>
							)}
						</div>
						<section className={styles.productDescription}>
              <div className={styles.productBox}>
  							<h1 className={styles.productTitle}>{coffee.name}</h1>
  							<p className={styles.productPrice}>${coffee.price}</p>
  							<div className={styles.productSpecs}>
  								<p>
  									{" "}
  									<span></span> {coffee.description}
  								</p>
  							</div>
  							<div className={styles.cartButtons}>
  								<Button
  									onClick={handleAddToCart}
  									variant="dark"
  									size="md"
  									className={styles.addViewBtn}
  								>
  									Add to Cart
  								</Button>
  								<Link href="/cart" >
  									<Button    
										variant="dark"  
										size="md" 
										className={styles.addViewBtn}
									>
  										View Cart
  									</Button>
  								</Link>
  							</div>
  						</div>
  					</section>
          </section>
				</div>
			) : (
        <div>
  				<h1 className={styles.deleted}>Coffee Not Found</h1>
          <button
            className={`${styles.deletedBtn}`}
            onClick={() => router.push("/shopall")}
          >
            Go Back
          </button>
        </div>
			)}
		</Layout>
	);
};

Coffee.getInitialProps = async () => {
	const res = await fetch("http://localhost:8080/items");
	const coffees = await res.json();

	return { coffees };
};

export default Coffee;
