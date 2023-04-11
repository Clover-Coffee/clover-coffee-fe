import React from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/confirmation.module.css";
import { useRouter } from "next/router";

const Confirmation = () => {
  // Generate a random order number
  const orderNumber = Math.floor(Math.random() * 1000000000);
  const router = useRouter();
  const orderTotal = router.query.orderTotal;
  const cloverFees = router.query.cloverFees;

  return (
    <Layout>
      <div className={styles.confirmationContainer}>
        <h1>Confirmation</h1>
        <p>Order Number: {orderNumber}</p>
        <p>Order Total: ${orderTotal}</p>
        <p>Clover Fees: ${cloverFees}</p>
      </div>
    </Layout>
  );
};

export default Confirmation;
