import apiClient from "api/apiClient";
import React, { useEffect, useState } from "react";

import BarterStyled from "./Barter.styled";

import tradesList from "assets/data/tradesList";

export const Offer = (props) => {
  const [myBarters, setMyBarters] = useState({});

  useEffect(() => {
    apiClient.get("/trades").then((response) => {
      const trade_main = response.data.find((trade_item) => {
        return trade_item.giver.id === props.giveProductId;
      });

      if (trade_main) {
        setMyBarters(trade_main.giver);
      }
    });
  }, [props.giveProductId]);

  return (
    props.status != "product deleted" && (
      <BarterStyled image={myBarters.images}>
        <h2></h2>
        <div className="image-cont"></div>
        <div className="info">
          <div className="barter-product">
            <h3>{myBarters.name}</h3>
            <p>City: {myBarters.city}</p>
          </div>
        </div>
      </BarterStyled>
    )
  );
};

export default Offer;
