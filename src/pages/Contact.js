import React from "react";
import Layout from "@/components/Layout";

const Form = () => {
  return (
    <Layout>
      <div className="contactForm">
        <form className="mainForm">
          <label>YOUR NAME</label>
          <input
            className="contactInputs"
            type="text"
            name="name"
            placeholder="Name"
          ></input>
          <label>EMAIL</label>
          <input
            className="contactInputs"
            type="text"
            name="name"
            placeholder="Email"
          ></input>
          <label>MESSAGE</label>
          <textarea rows="6" placeholder="Type your message here"></textarea>
          <button className="btn" type="submit">
            SEND
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Form;
