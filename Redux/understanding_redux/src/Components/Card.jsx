import React, { useContext } from "react";
import "../App.css";
import { CartContext } from "../Context/ContextCart";

const Card = ({ props }) => {
  const { id, name, age, email, phone, city, jobTitle, profileImage } = props;
  //   console.log("🚀 ~ Card ~ id:", id)
  const { count,setCount } = useContext(CartContext);

  return (
    <div className="person-card">
      <div className="person-card__image-wrapper">
        <img
          className="person-card__image"
          src={profileImage}
          alt={name}
          loading="lazy"
        />
      </div>

      <div key={id} className="person-card__content">
        <h2 className="person-card__name">{name}</h2>

        <p className="person-card__job">{jobTitle}</p>

        <div className="person-card__details">
          <p>
            <strong>Age:</strong> {age}
          </p>

          <p>
            <strong>City:</strong> {city}
          </p>

          <p>
            <strong>Email:</strong> {email}
          </p>

          <p>
            <strong>Phone:</strong> {phone}
          </p>
        </div>

        <button
          className="person-card__button"
          onClick={() => setCount(count+1)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
