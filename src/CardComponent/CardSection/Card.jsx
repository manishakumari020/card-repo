import React from "react";
import CardImage from "../../asset/cardLogo.png";
import "./Card.css";

const Card = () => {
  return (
    <div>
      <div className="react">
        <img src={CardImage} alt="card" />
        <button className="btn">100M Follows</button>
      </div>
      <p className="para1">New Bollywood</p>
    </div>
  );
};

export default Card;
