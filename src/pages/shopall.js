import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import AddModal from "../components/AddModal";
import Layout from "@/components/Layout";
import Carousel from "@/components/Carousel";
import styles from "@/styles/shopall.module.css";
import API_BASE_URL from "../../config";

const ShopAll = ({ coffees }) => {
	const [showModal, setShowModal] = useState(false);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [brand, setBrand] = useState("");
	const [query, setQuery] = useState("");
	const [filteredCoffees, setFilteredCoffees] = useState(0);

	const handleSearch = (event) => {
		setQuery(event.target.value);
		const searchCoffee = coffees.filter((coffee) =>
			coffee.name.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredCoffees(searchCoffee);
	};

	const handleClick = () => {
		setShowModal(!showModal);
	};
	const onClose = () => {
		setShowModal(false);
		window.location.reload();
	};

	const addItems = async (event) => {
		window.location.reload();
		console.log("clicked");
		const response = await fetch(`${API_BASE_URL}/items`, {
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
			{filteredCoffees.length > 0 ? (
				<ul>
					<section className="products-section">
						<h2 className={styles.featured}>Stumptown Coffee</h2>
						<Carousel coffees={filteredCoffees} />
					</section>
				</ul>
			) : (
				<div className={styles.productsContainer}>
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
					<div className={styles.customButton}>
						{" "}
						<Button
							onClick={handleClick}
							variant="dark"
							size="md"
							className={styles[`my-custom-class`]}
						>
							ADD NEW COFFEE
						</Button>
					</div>

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
			)}
			<input type="text" value={query} onChange={handleSearch} alt="hello" />
		</Layout>
	);
};

ShopAll.getInitialProps = async () => {
	const res = await fetch(`${API_BASE_URL}/items`);
	const coffees = await res.json();

	return { coffees };
};

export default ShopAll;
