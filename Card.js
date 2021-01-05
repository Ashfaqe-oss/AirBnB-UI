import React from 'react';
import "./Card.css";

function Card ( { src, title, description, price } ) {
  return (
    <div className="card">
      <img src={src} alt="" className="card__img" />
      <div className="card__info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

    </div>
  );
}

export default Card;
