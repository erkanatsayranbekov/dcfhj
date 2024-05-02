import React, { useEffect, useState } from "react";

import BarterMenu from "components/BarterMenu";
import Header from "components/Header";

import profileImage from "../../assets/img/Profill.png";
import swapIcon from "../../assets/img/swapBarter.svg";

import "./_barters.scss";
import { Link, useParams } from "react-router-dom";
import apiClient from "api/apiClient";
import tradesList from "../../assets/data/tradesList";

function BartersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [wantProduct, setWantProduct] = useState({});
  const [giveProduct, setGiveProduct] = useState({});
  const [trade, setTrade] = useState({});

  const param = useParams();

  useEffect(() => {
    apiClient.get(`/trades/${param.id}`).then((response) => {
      const trade_main = response.data;
      if (trade_main) {
        setGiveProduct(trade_main.giver);
        setWantProduct(trade_main.receiver);
        setTrade(trade_main);
        setIsLoading(false);
      }
    });
  }, [param.id]);

  return (
    !isLoading && (
      <div>
        <Header />
        <div className="settings-page">
          <BarterMenu linkActive={"barters"} />
          <div className="barters-card">
            <div className="barters-card-content">
              <div className="barters-card-one">
                <div className="barters-card-profile">
                  <img
                    src={profileImage}
                    className="barters-card-photo"
                    style={{ width: "100px" }}
                  />
                  <div className="barters-card-profile-text-section">
                    <p className="barters-card-name">
                      {trade.giver.user_email}
                    </p>
                  </div>
                </div>
                <div className="barters-card-cart">
                  <img
                    style={{ width: "315px", height: "150px" }}
                    src={giveProduct.images}
                    className="barters-card-cart-image"
                  />
                  <div className="barters-card-cart-text-section">
                    <p className="barters-card-cart-name">{giveProduct.name}</p>
                    <p className="barters-card-cart-name">
                      {giveProduct.description}
                    </p>

                    <p className="barters-card-cart-category">
                      City: {giveProduct.city}
                    </p>
                  </div>
                  <Link
                    to={`/product/${giveProduct.id}`}
                    className="barters-card-cart-link"
                  >
                    <button className="barters-card-cart-button">
                      OPEN CARD
                    </button>
                  </Link>
                </div>
                <div className="barters-card-info">
                  <p className="barters-card-info-title">Barter type:</p>
                  <p className="barters-card-info-text">Forever</p>
                  <p
                    className={`barters-card-info-status ${
                      giveProduct.status == "trading"
                        ? "not-accepted"
                        : `${giveProduct.status == "Accepted" ? "" : "decline"}`
                    }`}
                  >
                    {giveProduct.status.toLocaleUpperCase()}
                  </p>
                </div>
              </div>
              <div className="barters-card-one"></div>

              <button className="barters-card-switch">
                <img src={swapIcon} />
              </button>

              <div className="barters-card-two">
                <div className="barters-card-profile">
                  <img
                    src={profileImage}
                    className="barters-card-photo"
                    style={{ width: "100px" }}
                  />
                  <div className="barters-card-profile-text-section">
                    <p className="barters-card-name">
                      {trade.receiver.user_email}
                    </p>
                  </div>
                </div>
                <div className="barters-card-cart ">
                  <img
                    src={wantProduct.images}
                    style={{ width: "315px", height: "150px" }}
                    className="barters-card-cart-image"
                  />
                  <div className="barters-card-cart-text-section">
                    <p className="barters-card-cart-name">{wantProduct.name}</p>
                    <p className="barters-card-cart-name">
                      {wantProduct.description}
                    </p>

                    <p className="barters-card-cart-category">
                      City: {wantProduct.city}
                    </p>
                  </div>
                  <Link
                    to={`/product/${wantProduct.id}`}
                    className="barters-card-cart-link"
                  >
                    <button className="barters-card-cart-button margin-button">
                      OPEN CARD
                    </button>
                  </Link>
                </div>

                <div className="barters-card-info">
                  <p className="barters-card-info-title">Barter type:</p>
                  <p className="barters-card-info-text">Forever</p>
                  <p
                    className={`barters-card-info-status ${
                      wantProduct.status == "trading"
                        ? "not-accepted"
                        : `${wantProduct.status == "Accepted" ? "" : "decline"}`
                    }`}
                  >
                    {wantProduct.status.toLocaleUpperCase()}
                  </p>
                </div>
              </div>
            </div>
            <div className="barters-buttons-row">
              {(() => {
                if (trade.status == "waiting_action") {
                  return (
                    <>
                      <button
                        className="barters-card-cart-button green-button"
                        // onClick={handleConfirm}
                      >
                        ACCEPT BARTER
                      </button>
                      <button
                        className="barters-card-cart-button red-button"
                        // onClick={handleDecline}
                      >
                        DECLINE BARTER
                      </button>
                    </>
                  );
                } else if (trade.status == "confirmed_trade") {
                  return (
                    <>
                      <button
                        className="barters-card-cart-button green-button"
                        // onClick={handleSuccess}
                      >
                        SUCCESS BARTER
                      </button>
                      <button className="barters-card-cart-button red-button">
                        REPORT BARTER
                      </button>
                    </>
                  );
                } else if (trade.status == "cancelled_trade") {
                  return (
                    <>
                      <button className="barters-card-cart-button red-button">
                        REPORT BARTER
                      </button>
                    </>
                  );
                } else {
                  return <></>;
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default BartersPage;
