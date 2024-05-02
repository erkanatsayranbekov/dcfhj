import React, { useEffect } from "react";

import BarterMenu from "components/BarterMenu";
import Header from "components/Header";

import swapIcon from "../../assets/img/swapBarter.svg";
import BartersPageStyled from "./BartersPage.styled";
import card from "../../assets/img/shoppingCartBig.svg";

import { useState } from "react";
import MyBarter from "components/Barter";
import { Link } from "react-router-dom";
import SecondBarter from "components/SecondBarter";

import apiClient from "api/apiClient";

function BartersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    apiClient.get("/trades").then((response) => {
      setTrades(response.data);
      setIsLoading(false);
    });
  }, []);

  const cancelledTrades = [];
  trades.forEach((barter) => {
    if (barter.status === "Cancelled") {
      cancelledTrades.push(
        <div
          style={{ backgroundColor: "#ffffff", width: "300px" }}
          key={barter.id}
        >
          <MyBarter key={barter._id} giveProductId={barter.giver.id} />
          <div className="swap">
            <img src={swapIcon} alt="" style={{ width: "40px" }} />
          </div>
          <SecondBarter key={barter._id} wantProductId={barter.receiver.id} />
          <Link to={`/trades/${barter._id}`}>
            <button>Trade info</button>
          </Link>
        </div>
      );
    }
  });

  return (
    !isLoading && (
      <div>
        <Header />
        <BartersPageStyled>
          <BarterMenu linkActive={"trades"} />
          <div className="barters">
            <h3>Active Barters</h3>

            {trades != null ? (
              <div className="cont">
                <h4>
                  Trades which{" "}
                  <span style={{ color: "#001" }}>waiting for action</span>
                </h4>

                <div>
                  {trades.reduce((acc, barter) => {
                    if (barter.status === "waiting_action") {
                      acc.push(
                        <div
                          style={{ backgroundColor: "#ffffff", width: "300px" }}
                          key={barter.id}
                        >
                          <MyBarter
                            key={barter._id}
                            giveProductId={barter.giver.id}
                          />
                          <div className="swap">
                            <img
                              src={swapIcon}
                              alt=""
                              style={{ width: "40px" }}
                            />
                          </div>
                          <SecondBarter
                            key={barter._id}
                            wantProductId={barter.receiver.id}
                          />
                          <Link to={`/trades/${barter._id}`}>
                            <button>Trade info</button>
                          </Link>
                        </div>
                      );
                    }
                    return acc;
                  }, [])}
                </div>
                <br />
                <br />
                <br />

                <h4>
                  Trades which were{" "}
                  <span style={{ color: "#001" }}>accepted</span>
                </h4>
                <div>
                  {trades
                    .filter((barter) => barter.status === "Confirmed")
                    .map((barter) => (
                      <div
                        style={{ backgroundColor: "#ffffff", width: "300px" }}
                        key={barter.id}
                      >
                        <MyBarter
                          key={barter._id}
                          giveProductId={barter.giver.id}
                        />
                        <div className="swap">
                          <img
                            src={swapIcon}
                            alt=""
                            style={{ width: "40px" }}
                          />
                        </div>
                        <SecondBarter
                          key={barter._id}
                          wantProductId={barter.receiver.id}
                        />
                        <Link to={`/trades/${barter._id}`}>
                          <button>Trade info</button>
                        </Link>
                      </div>
                    ))}
                </div>
                <br />
                <br />
                <br />

                <h4>
                  Trades which were{" "}
                  <span style={{ color: "#001" }}>declined</span>
                </h4>
                <div>{cancelledTrades}</div>
              </div>
            ) : (
              <div className="empty">
                <img src={card} alt="" />
                <p>You still haven't added an item to exchange.</p>
              </div>
            )}
          </div>
        </BartersPageStyled>
      </div>
    )
  );
}

export default BartersPage;
