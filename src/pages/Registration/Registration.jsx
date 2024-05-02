import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import hands from "assets/img/hands.png";
import RegistrationStyled from "./Registration.styled";
import apiClient from "api/apiClient";
import axios from "axios";

const Registration = ({ onSubmit }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const signup = (event) => {
    event.preventDefault();
    axios.post("https://65ba5e3eb4d53c066552bb1a.mockapi.io/users", formData).then((response) => {
      console.log('response', response)
      navigate("/login");
    }).catch((error) => {
      console.log('error', error)
    })
  }

  return (
    <RegistrationStyled>
      <div className="main-pic">
        <img alt="" src={hands} />
      </div>

      <form className="form" onSubmit={signup}>
        <h1>Registration form</h1>
        <p>
          To continue using our platform, you need to register an account.
        </p>

        <div className="form__main-info">
          <p>Userame</p>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="form__main-info">
          <p>Email</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form__main-info">
          <p>Password</p>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <Link to="/forgot-password">
          <span>Forgot password?</span>
        </Link>
        <button type="submit" className="green-button">Sign up</button>
      </form>
    </RegistrationStyled>
  );
};

export default Registration;

