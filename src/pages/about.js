import React from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/about.module.css";
import Image from "next/image";

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
          <h1>CREATING A BETTER WORLD</h1>
          <p>
            Clover Coffee&apos;s mission is simple - change the world by making
            people happy. What started out as a vision for serving the best
            coffee, became an opportunity to influence meaningful, long-lasting
            change and leave this world better than we found it.
          </p>
        </div>
      </div>
      <div className={styles.historyimages}>
        <Image
          src="https://images.unsplash.com/photo-1672849843203-eb3eff2e1be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2456&q=80"
          alt="coffee-farm"
          height={400}
          width={500}
        />
        <Image
          src="https://images.unsplash.com/photo-1633281121789-69e58edec7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          alt="coffee-farm"
          height={400}
          width={500}
        />
        <Image
        className={styles.historyimg}
          src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          alt="coffee-farm"
          height={400}
          width={500}
        />
      </div>
    </Layout>
  );
};

export default About;
