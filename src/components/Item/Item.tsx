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
  const [owner, setOwner] = useState<UserState>({
      id: "",
      username: "",
      email: "",
      avatar: "",
      password: ""
  });

  useEffect(() => {
    console.log('product', product)
    axios
      .get(`https://65ba5e3eb4d53c066552bb1a.mockapi.io/users/${product.user_id}`)
      .then((response) => {
        setOwner(() => ({
          ...response.data,
        }));
      });
    setIsLoading(false);
  }, [isLoading]);
  
  return (
    !isLoading && (
      <ItemStyled>
        <div className="item">
          <div className="item__cont">
            <div className="item__cont-pics">
              <div className="item__pic">
                <img alt="" src={product.image} />
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
                      <h1>{product.name}</h1>
                    </div>
                  </div>
                  <div className="item__barter-btn">
                    <a
                      href={`mailto:${owner?.email}`}
                      style={{ fontWeight: "700" }}
                    >
                      Mail to owner:{" "}
                      <span style={{ fontWeight: "500" }}>
                        {owner?.email}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </ItemStyled>
    )
  );
}

export default Item;

