import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

import AddressInput from "components/Map/AddressInput";

import BarterMenu from "components/BarterMenu";
import Header from "components/Header";
import AddOfferStyled from "./AddOffer.styled";

import load from "../../assets/img/load.svg";
// import add from "../../assets/img/addCircle.svg";

import apiClient from "api/apiClient";

const AddOffer = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const user_email = "user_test@gmail.com";
  const city = "Almaty, Kazakhstan";

  const handleSubmit = async (e) => {
    e.preventDefault();
    apiClient
      .post("/items", {
        name,
        description,
        image,
        user_email,
        city,
        category,
      })
      .then(() => {
        navigate("/items");
      });
  };
  return (
    <>
      <Header />
      <AddOfferStyled>
        <BarterMenu linkActive="offers" />

        <form className="cont" onSubmit={handleSubmit}>
          <div className="offer">
            <div className="info">
              <div>
                <h3>Item Info</h3>
                <p>Please enter your item info</p>
              </div>
            </div>
            <div className="offer-product">
              <div className="product-info">
                <div>
                  <h4>Item name</h4>
                  <input
                    type="text"
                    placeholder={"Item name"}
                    id="item"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <h4>Item category</h4>
                  <input
                    type="text"
                    placeholder={"Item categoty"}
                    id="category"
                    required
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>

                <h4>Description</h4>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
                <h4>Link Image </h4>
                <input
                  name="image"
                  id="image"
                  placeholder="Link image"
                  onChange={(e) => setImage(e.target.value)}
                  required
                />

                <h4>Is your item used? </h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <input
                    style={{ width: "3%" }}
                    type="radio"
                    name="condition"
                    value="New"
                    onChange={(e) => setCondition(e.target.value)}
                  />
                  <label htmlFor="new" id="condition">
                    New
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <input
                    type="radio"
                    name="condition"
                    value="Used"
                    style={{ width: "3%" }}
                    onChange={(e) => setCondition(e.target.value)}
                  />
                  <label htmlFor="used" id="condition">
                    Used
                  </label>
                </div>
                <h4>Change fast? </h4>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <input type="checkbox" id="urgent" name="urgent" />
                  <label htmlFor="urgent" id="urgent_label">
                    Urgent
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button id="submitButton" type="submit">
            ADD OFFER
          </button>
        </form>
      </AddOfferStyled>
    </>
  );
};

export default AddOffer;
