import React from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/about.module.css";

const About = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles["mission-statement"]}>
          <h1 className={styles.statement}>
            Experience coffee like never before.
          </h1>
        </div>
        <section className={styles["core-values"]}>
          <div className={styles["core-pic"]}></div>
          <div className={styles["core-text"]}>
            {" "}
            <h1>Fresh Roasted Coffee Delivered Straight To Your Door.</h1>
            <p>
              Our story began in 2021 with an unwavering commitment to sourcing
              and roasting quality coffee. Since then, our partnerships with
              farmers, producers, baristas, roasters, businesses, and customers
              have helped us grow and nurture a shared coffee culture and
              experience.{" "}
            </p>
          </div>
        </section>

        <div className={styles.history}>
          <p className={styles["history-values"]}>history</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
