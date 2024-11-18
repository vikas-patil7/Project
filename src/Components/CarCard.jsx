import React from 'react';
import './Styles.css'

function CarCard({ name, image, description, price }) {
  return (
    <div className="car-card">
      <img src={image} alt={name} className="car-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="price">{price}</p>
      <a href="https://www.bmw.in/en/all-models.html"><button className="buy-button">Learn More</button></a>
    </div>
  );
}

export default CarCard;