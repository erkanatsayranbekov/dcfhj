import apiClient from "api/apiClient";
import BarterMenu from "components/BarterMenu";
import Header from "components/Header";
import AddressInput from "components/Map/AddressInput";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditProductStyled from "./EditProduct.styled";

const EditProduct = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  return (
    !isLoading && (
      <>
        <EditProductStyled>
          <form className="cont">
            <div className="offer-product">
              <div className="product-pic">
                <img alt="" src={product.image} />
              </div>
              <div className="product-info">
                <div>
                  <h4>Product name</h4>
                  <input
                    type="text"
                    placeholder="Product name to change"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <h4>Description</h4>
                  <textarea
                    name="description"
                    id="description"
                    placeholder={`Product description to change`}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>

                  <h4>Link for pic (Временно)</h4>
                  <input
                    type="text"
                    placeholder={`If you want to change picture of item`}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <button type="submit" style={{ marginTop: "20px" }}>
                  Edit card
                </button>
              </div>
            </div>
          </form>
        </EditProductStyled>
      </>
    )
  );
};

export default EditProduct;
