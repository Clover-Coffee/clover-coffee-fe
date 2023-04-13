/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/confirmation.module.css";
import { useRouter } from "next/router";

const Confirmation = () => {
  const orderNumber = Math.floor(Math.random() * 1000000000);
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.confirmationContainer}>
        <h1 className={styles.thankYou}>Thank you!</h1>
        <p className={styles.confirmationText}>Your Order Number is #{orderNumber}</p>
        <p className={styles.community}>We appreciate your support for our business and choosing to shop small with us. Your purchase helps support our team and our community, and it wouldn't be possible without the support of customers like you.</p>
      </div>
    </Layout>
  );
};

export default Confirmation;
