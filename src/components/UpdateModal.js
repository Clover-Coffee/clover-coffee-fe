import React from "react";

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
            />
          </label>
          <label className="description-label">
            <p>Description:</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ color: "black" }}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <select
            value={brand}
            name="brand"
            id="category-dropdown"
            onChange={(e) => setBrand(e.target.value)}
          >
            <p>Brand</p>
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
            />
          </label>

          <button type="submit">Update Item</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default UpdateItemModal;
