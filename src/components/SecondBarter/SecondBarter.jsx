import apiClient from "api/apiClient";
import React, { useEffect, useState } from "react";

import BarterStyled from "./SecondBarter.styled";

import pic from "../../assets/img/01.png";

import tradesList from "assets/data/tradesList";

export const Offer = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [toMeBarters, setToMeBarters] = useState({});

  useEffect(() => {
    apiClient.get("/trades").then((response) => {
      const trade_main = response.data.find((trade_item) => {
        return trade_item.receiver.id === props.wantProductId;
      });

      if (trade_main) {
        setToMeBarters(trade_main.receiver);
      }
    });
  }, [props.wantProductId]);

  return (
    props.status != "product deleted" &&
    !isLoading && (
      <BarterStyled image={toMeBarters.images}>
        <div className="image-cont"></div>
        <div className="info">
          <div className="barter-product">
            <h3>{toMeBarters.name}</h3>
            <p>City: {toMeBarters.city}</p>
          </div>
        </div>
      </BarterStyled>
    )
  );
};

export default Offer;
