import React, { useEffect, useState } from "react";
import Header from "components/Header";
import Item from "components/Item/Item";
import Footer from "components/Footer";
import ProductStyled from "./Product.styled";
import apiClient from "api/apiClient";

type Props = {
  params: { id: string };
  fetchData: () => Promise<any>;
  history: { push: (path: string) => void };
};

type Product = {
  id: number;
  name: string;
  image: string;
  category: string;
  city: string;
  description: string;
  services: string;
  user_id: number;
}

const CardPage: React.FC<Props> = ({ params, fetchData, history }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product>();
  const [cardFound, setCardFound] = useState(true);

  useEffect(() => {
    fetchData().then((card) => {
      if (card) {
        setProduct(card);
        setCardFound(true);
      } else {
        setCardFound(false);
      }
      setIsLoading(false);
    });
  }, [fetchData, params.id]);

  const handleDelete = () => {
    const { id } = params;
    apiClient.delete(`/items/${parseInt(id)}`).then(() => {
      history.push("/items");
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!cardFound) {
    return (
      <>
        <Header />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "10rem",
          }}
        >
          This element does not exist.
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <ProductStyled>
        <Item product={product} />
      </ProductStyled>
      <Footer />
    </>
  );
};

export default CardPage;
export type { Product };

