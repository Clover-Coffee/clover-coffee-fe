/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useContext } from "react";
import { Container, Table, Row, Button } from "react-bootstrap";
import Layout from "@/components/Layout";
import styles from "@/styles/cart.module.css";
import { CartContext } from "@/CartContext";
import Link from "next/link";

const Cart = () => {
  const { cart, setCart, addItemToCart, removeItemFromCart, decreaseQuantity } =
    useContext(CartContext);

  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((coffee) => {
      let quantity = coffee.quantity;
      sum += coffee.price * quantity;
    });
    sum = (Math.round(sum * 100) / 100).toFixed(2);
    setSubTotal(sum);
  }, [cart]);

  useEffect(() => {
    let tax = 0;
    cart.forEach((coffee) => {
      let quantity = coffee.quantity;
      tax += coffee.price * quantity * 0.13;
    });
    tax = (Math.round(tax * 100) / 100).toFixed(2);
    setTax(tax);
  }, [cart]);

  useEffect(() => {
    let total = 0;
    cart.forEach((coffee) => {
      let quantity = coffee.quantity;
      total += coffee.price * quantity;
      total += coffee.price * quantity * 0.13;
    });
    total = (Math.round(total * 100) / 100).toFixed(2);
    setTotal(total);
  }, [cart]);

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
                        <Link href={`/coffee/${coffee.id}`} passHref>
                          <img
                            className="cartImage"
                            src={coffee.image}
                            alt={coffee.name}
                            style={{ maxWidth: "100%" }}
                          />
                        </Link>
                      </td>
                      <td>{coffee.name}</td>
                      <td>${coffee.price}</td>
                      <td>
                        <span className={styles.btnContainer}>
                          <span
                            className={`${styles.decreaseBtn} ${styles.cartBtn}`}
                            onClick={() => decreaseQuantity(coffee.id)}
                          >
                            -
                          </span>
                          {coffee.quantity}
                          <span
                            className={`${styles.addBtn} ${styles.cartBtn}`}
                            onClick={() => addItemToCart(coffee)}
                          >
                            +
                          </span>
                        </span>
                        <span
                          className={`${styles.deleteBtn} ${styles.cartBtn}`}
                          onClick={() => removeItemFromCart(coffee.id)}
                        >
                          delete
                        </span>
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
