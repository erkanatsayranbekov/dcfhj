import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAppSelector } from "../../lib/hooks";
import CreateProductStyled from "./CreateProductStyled";
import axios from "axios";



function CreateProduct() {
  const { user, isAuthenticated } = useAppSelector((state) => state.authentication);
  const [formData, setFormData] = useState({
    user_id: user?.id,
    name: "",
    image: "",
    category: "",
    city: "",
    description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("https://65ba5e3eb4d53c066552bb1a.mockapi.io/products", formData)
      .then((response) => {
        console.log('response', response)
      });
  }

  
  return (
    <div className="Products">
      <Header activePage="create-product"/>
        <CreateProductStyled onSubmit={(e)=>handleSubmit(e)}>
          <div>
            <input
              type="text"
              placeholder="Product name"
              name="name"
              onChange={(e)=>handleChange(e)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Product image"
              name="image"
              onChange={(e)=>handleChange(e)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Product category"
              name="category"
              onChange={(e)=>handleChange(e)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Product city"
              name="city"
              onChange={(e)=>handleChange(e)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Product services"
              name="services"
              onChange={(e)=>handleChange(e)}
              required
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Product description"
              name="description"
              onChange={(e)=>handleChange(e)}
              required
            ></textarea>
          </div>
          <button type="submit">Create</button>
        </CreateProductStyled>
      <Footer />
    </div>
  );
}

export default CreateProduct;
