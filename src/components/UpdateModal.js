import React from "react";
import styles from "../styles/coffee.module.css";

function UpdateItemModal({
  item,
  onClose,
  handleSubmit,
  setName,
  setDescription,
  setPrice,
  name,
  description,
  price,
  setBrand,
  brand,
  setImage,
  image,
}) {
  return (
    <div className="modal">
      <div className="modal-content">
        <form className="updateForm" onSubmit={handleSubmit}>
          <label className="updateLabel">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.inputContainer}
            />
          </label>
          <label className="description-label">
            <p>Description:</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ color: "black" }}
              className={styles.inputContainer}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={styles.inputContainer}
            />
          </label>
          <select
            value={brand}
            name="brand"
            id="category-dropdown"
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">Select a Brand</option>
            <option value="stumptown">Stumptown</option>
            <option value="whitenoise">White Noise</option>
            <option value="peets">Peets</option>
            <option value="partners">Partners</option>
          </select>
          <label>
            Image:
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className={styles.inputContainer}
            />
          </label>

          <button type="submit" className={styles.submitBtn}>Update Item</button>
        </form>
        <button onClick={onClose} className={styles.closeBtn}>Close</button>
      </div>
    </div>
  );
}

export default UpdateItemModal;
