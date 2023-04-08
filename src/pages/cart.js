import React, { useEffect, useState, useContext } from "react";
import { Container, Table, Row, Button } from "react-bootstrap";
import Layout from "@/components/Layout";
import styles from "@/styles/cart.module.css";
import { CartContext } from "@/CartContext";

const Cart = () => {
  const { cart, addItemToCart, removeItemFromCart, decreaseQuantity} = useContext(CartContext);



	const [subTotal, setSubTotal] = useState(0);
	const [tax, setTax] = useState(0);
	const [total, setTotal] = useState(0);

	//   useEffect(() => {
	//     let total = 0;
	//     cart.forEach((coffee) => {
	//       total += coffee.price;
	//       total += coffee.price * 0.13;
	//     });
	//     total = (Math.round(total * 100) / 100).toFixed(2);
	//     setTotal(total);
	//   }, [cart]);

	// useEffect(() => {
	// 	let sum = 0;
	// 	// cart.forEach((coffee) => {
	// 	//   sum += coffee.price;
	// 	// });
	// 	sum = (Math.round(sum * 100) / 100).toFixed(2);
	// 	setSubTotal(sum);
	// }, []);

	// useEffect(() => {
	// 	let tax = 0;
	// 	// cart.forEach((coffee) => {
	// 	//   tax += coffee.price * 0.13;
	// 	// });
	// 	tax = (Math.round(tax * 100) / 100).toFixed(2);
	// 	setTax(tax);
	// }, []);

	// const deleteCoffee = (id) => {
	// 	const newCart = cart.filter((coffee) => coffee.id !== id);
	// 	setCart(newCart);
	// 	console.log(cart);
	// };

	return (
		<Layout>
			<div>
				<Container className={styles.cartContainer}>
					<Row>
						<div className="col-9 cartShow">
							<Table
								className="table"
								bordered
								hover
								responsive="sm"
								style={{ tableLayout: "fixed" }}
							>
								<thead>
									<tr>
										<th>Product Image</th>
										<th>Name</th>
										<th>Price</th>
										<th>Quantity</th>
									</tr>
								</thead>
								<tbody className="cartColumns">
									{cart.map((coffee) => (
										<tr className="cartDetails" key={coffee.id}>
											<td>
												<img
													className="cartImage"
													src={coffee.image}
													alt={coffee.name}
													style={{ maxWidth: "100%" }}
												/>
											</td>
											<td>{coffee.name}</td>
											<td>${coffee.price}</td>
											<td>{coffee.quantity}
                        <button onClick={() => addItemToCart(coffee)}>
                          +
                        </button>
												<button
													className="deleteBtn"
													onClick={() => decreaseQuantity(coffee.id)}
												>
													-
												</button>
                        <button onClick={() => removeItemFromCart(coffee.id)}>
                          delete
                        </button>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						</div>
						<div className="col-3 cartSum boxShadow bg-light p-4">
							<h5 className="text-left mb-4 pb-2">Your Cart</h5>
							<div className="d-flex justify-content-between mb-3">
								<h6 className="fw-normal">SubTotal Price :</h6>
								<span>${subTotal}</span>
							</div>
							<div className="d-flex justify-content-between mb-4">
								<h6 className="fw-normal">Tax :</h6>
								<span>${tax}</span>
							</div>
							<div className="d-flex justify-content-between fw-bold">
								<h6>Total Price :</h6>
								<span>${total}</span>
							</div>
							<Button variant="dark" size="md" className="mt-4 w-100">
								Pay Now
							</Button>
						</div>
					</Row>
				</Container>
			</div>
		</Layout>
	);
};

export default Cart;
