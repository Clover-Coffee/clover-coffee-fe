import React from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/about.module.css";

const About = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles['mission-statement']}>
          <h1>add coffee image here</h1>
        </div>
        <div className={styles['core-values']}>
          <p className={styles['core-p']}>values</p>
        </div>
        <div className={styles.history}>
          <p className={styles['history-values']}>history</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
