import React from "react";
import { useParams } from "react-router-dom";
import CardPageClass from "./CardPage"; // Assume your class component is named CardPageClass
import ErrorBoundary from "./ErrorBoundary";
import apiClient from "api/apiClient";
import axios from "axios";

function CardPageWrapper() {
  const params = useParams();

  const fetchData = async () => {
    const response = await axios.get(`https://65ba5e3eb4d53c066552bb1a.mockapi.io/products/${params.id}`);
    return response.data
  };

  return (
    <ErrorBoundary>
      <CardPageClass params={params} fetchData={fetchData} />
    </ErrorBoundary>
  );
}

export default CardPageWrapper;
