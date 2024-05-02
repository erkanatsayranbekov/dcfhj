import React, { useEffect, useState } from "react";
import ItemStyled from "./Item.styled";
import axios from "axios";
import { UserState } from "lib/usersSlice"
import { Product } from "pages/ProductPage/CardPage";

interface Props {
  product: Product;
}

function Item({ product }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState<Product & { owner: UserState }>({
    id: 0,
    user_id: 0,
    name: "",
    image: "",
    city: "",
    category: "",
    services: "",
    description: "",
    owner: {
      id: "",
      username: "",
      email: "",
      avatar: "",
      password: ""
    },
  });

  useEffect(() => {
    console.log('productData', productData)
    axios
      .get(`https://65ba5e3eb4d53c066552bb1a.mockapi.io/products/${product.id}`)
      .then((response) => {
        setProductData({ ...response.data, owner: { id: response.data.user_id } });
      });

    axios
      .get(`https://65ba5e3eb4d53c066552bb1a.mockapi.io/users/${productData.owner.id}`)
      .then((response) => {
        const data = response.data;
        setProductData((prev) => ({
          ...prev,
          owner: {
            ...prev.owner,
            data
          },
        }));
      });
    setIsLoading(false);
    console.log('productData', productData)
  }, [isLoading]);

  return (
    !isLoading && (
      <ItemStyled>
        <div className="item">
          <div className="item__cont">
            <div className="item__cont-pics">
              <div className="item__pic">
                <img alt="" src={productData.image} />
              </div>
              <div className="item__right">
                <div className="item__cont-main">
                  <div className="item__info">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h1>{productData.name}</h1>
                    </div>
                  </div>
                  <div className="item__barter-btn">
                    <a
                      href={`mailto:${productData.owner.email}`}
                      style={{ fontWeight: "700" }}
                    >
                      Mail to owner:{" "}
                      <span style={{ fontWeight: "500" }}>
                        {productData.owner.email}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-description">
              <h3>Description</h3>
              <p>{productData.description}</p>
            </div>
          </div>
        </div>
      </ItemStyled>
    )
  );
}

export default Item;

