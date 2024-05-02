import React from "react";
import { Link } from "react-router-dom";

// import { BarterOffers as offers } from "../../assets/data/BarterOffers";
import BarterStyled from "./Offer.styled";

export const Offer = (props) => {
  return (
    props.status != "product deleted" && (
      <BarterStyled image={props.image}>
        <div>
          <div className="image-cont"></div>
        </div>
        <div className="info">
          <div>
            <h3>{props.name}</h3>

            <p>Category: {props.category}</p>
            <p>Address: {props.address}</p>
          </div>
          <div>
            <h3>
              Trade: <span>Products: {props.services}</span>
            </h3>
            <hr />
          </div>

          <Link to={`/product/edit/${props.id}`}>
            <button>Edit Card</button>
          </Link>
          <button
            style={{ backgroundColor: "red", padding: "13px 80px" }}
            onClick={props.onDelete}
          >
            Delete card
          </button>
        </div>
      </BarterStyled>
    )
  );
};

export default Offer;
