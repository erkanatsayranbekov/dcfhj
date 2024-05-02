import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Offers from "../pages/Offers";
import Login from "../pages/Login";
// import Products from './pages/Products'
import Registration from "../pages/Registration";

import "../scss/app.scss";

import AddOffer from "pages/AddOffer";
import Chat from "pages/Chat";
import Coins from "pages/Coins";

import PrivateRoute from "../utils/PrivateRoute";
import Products from "pages/Products/Product";
import Settings from "pages/Settings/Settings";
import BartersPageInfo from "pages/BartersPageInfo/BartersPageInfo";
import ProductPage from "../pages/ProductPage";
import BartersPage from "pages/BartersPage";

import EditProduct from "pages/EditProduct";
import ThemeContextProvider from "pages/context/ThemeContextProvider";
import NotFound from "pages/NotFound/NotFound"
import About from "pages/About/About"
import CreateProduct from "../pages/CreateProduct/CreateProduct";


function App() {
  return (

    <Router>
      <ThemeContextProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path={`/product/:id`} element={<ProductPage />} />
            <Route path={`/create/product`} element={<CreateProduct />} />
            <Route path={`/product/edit/:id`} element={<EditProduct />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />

            <Route
              path="/items"
              element={
                <PrivateRoute>
                  <Offers />
                </PrivateRoute>
              }
            />

            <Route
              path="/offers/add-offer"
              element={
                <PrivateRoute>
                  <AddOffer />
                </PrivateRoute>
              }
            />
            <Route
              path="/chat"
              element={
                <PrivateRoute>
                  <Chat />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />
            <Route
              path="/trades/:id"
              element={
                <PrivateRoute>
                  <BartersPageInfo />
                </PrivateRoute>
              }
            />
            <Route
              path="/trades"
              element={
                <PrivateRoute>
                  <BartersPage />
                </PrivateRoute>
              }
            />

          </Routes>
        </div>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
