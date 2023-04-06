import React from "react";
import styles from "../styles/contact.module.css"


const Form = () => {
  return (
    <div className={styles.contactForm}>
      <form className={styles.mainForm}>
        <label>YOUR NAME</label>
        <input
          className={styles.contactInputs}
          type="text"
          name="name"
          placeholder="Name"
        ></input>
        <label>EMAIL</label>
        <input
          className={styles.contactInputs}
          type="text"
          name="name"
          placeholder="Email"
        ></input>
        <label>MESSAGE</label>
        <textarea className={styles.textArea} rows="6" placeholder="Type your message here"></textarea>
        <button className="btn" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default Form;
