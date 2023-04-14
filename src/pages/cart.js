/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useContext } from "react";
import { Container, Table, Row, Button } from "react-bootstrap";
import Layout from "@/components/Layout";
import styles from "@/styles/cart.module.css";
import { CartContext } from "@/CartContext";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { ProgressBar } from "react-loader-spinner";

const Cart = () => {
  const { cart, setCart, addItemToCart, removeItemFromCart, decreaseQuantity } =
    useContext(CartContext);

  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let subTotal = 0;
    let tax = 0;
    let total = 0;
  
    cart.forEach((coffee) => {
      let quantity = coffee.quantity;
      subTotal += coffee.price * quantity;
      tax += coffee.price * quantity * 0.09;
      total += coffee.price * quantity + tax;
    });
  
    subTotal = (Math.round(subTotal * 100) / 100).toFixed(2);
    tax = (Math.round(tax * 100) / 100).toFixed(2);
    total = (Math.round(total * 100) / 100).toFixed(2);
  
    setSubTotal(subTotal);
    setTax(tax);
    setTotal(total);
  }, [cart]);

  const handlePayNow = () => {
    if (cart.length > 0) {
      setLoading(true);
      setTimeout(() => {
        router.push({
          pathname: "/confirmation",
        });
        setCart([]);
        setLoading(false);
      }, 3000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Cart is empty",
        text: "Please add items to your cart before proceeding!",
      });
    }
  };

  return (
    <Layout>
      <div>
        {loading ? (
          <div className={styles.loaderContainer}>
            <ProgressBar height={80} width={80} />
          </div>
        ) : (
          <Container className={styles.cartContainer}>
            <Row className={styles.row}>
              <div className={`col-9 ${styles.cartShow}`}>
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
                        <td>
                          <span className={styles.btnContainer}>
                            <button
                              className={`${styles.cartBtn}`}
                              onClick={() => decreaseQuantity(coffee.id)}
                            >
                              <span className={`${styles.decreaseBtn}`}>-</span>
                            </button>
                            {coffee.quantity}
                            <button
                              className={`${styles.cartBtn}`}
                              onClick={() => addItemToCart(coffee)}
                            >
                              <span className={`${styles.addBtn}`}>+</span>
                            </button>
                          </span>
                          <button
                            className={`${styles.cartBtn}`}
                            onClick={() => removeItemFromCart(coffee.id)}
                          >
                            <span className={`${styles.deleteBtn}`}>
                              delete
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <div className={`col-3 ${styles.cartSum} boxShadow bg-light p-4`}>
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
                <Button
                  variant="dark"
                  size="md"
                  className="mt-4 w-100"
                  onClick={handlePayNow}
                >
                  Pay Now
                </Button>
              </div>
            </Row>
          </Container>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
