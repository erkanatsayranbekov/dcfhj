import React, { useState } from "react";
import { Link } from "react-router-dom";

// import cards_variant_image_like from "../../assets/img/cards_variant_image_like.svg";
// import cards_variant_image_like_clicked from "../../assets/img/cards_variant_image_like_clicked.svg";

import Button from "../Button/Button";

const CardVariant = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);

  function handleFavourite() {
    setIsFavourite((prevIsFavourite) => !prevIsFavourite);
  }
  return (
    <div className="products-and-service-cards-variant">
      <img
        className="cards-variant-image-product"
        src={props.image}
        alt="cards_variant_image"
       />
      <div className="products-and-service-card-text">
        <div className="products-and-service-card-text-product">
          <p className="product-or-barter-title">{props.serviceName}</p>

          <p className="below-text">Category: {props.category}</p>

          <p className="below-text">City: {props.city}</p>
        </div>
      </div>

      <div className="products-and-service-card-button">
        <Link to={`/product/${props.id}`}>
          <Button style={{ background: "#DE8807", height: 44, width: 253 }}>
            OPEN CARD
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardVariant;
