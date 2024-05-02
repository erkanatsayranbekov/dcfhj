import React from "react";
import Header from "../../components/Header";
import OffersNearby from "../../components/OffersNearby/OffersNearby";
import ProductsAndService from "../../components/ProductsAndService/ProductsAndService";
import Footer from "../../components/Footer";

function Products() {
  
  return (
    <div className="Products">
      <Header activePage="products"/>
      <ProductsAndService />
      <Footer />
    </div>
  );
}

export default Products;
