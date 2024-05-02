import React from "react";
import hands from "assets/img/hands.png";
import AboutStyled from "./About.styled";
import Header from "components/Header";
import Footer from "components/Footer";
class About extends React.Component {
  render() {
    return (
      <>
      <Header activePage="about"/>
      <AboutStyled>
        <div className="main-pic">
          <img alt="" src={hands} />
        </div>

        <form className="form">
          <h1>About Us</h1>
          <p>Welcome to Ayirbasta, your ultimate destination for modern bartering solutions!</p>
          <p>At Ayirbasta, we believe in the power of exchange.</p>
          <p>Our platform was born from the idea that everyone has something valuable to offer.</p>
          <p>Join us on this exciting journey as we redefine the way we trade and interact with one another.</p>
          <p>Whether you're here to swap, sell, or simply connect, Ayirbasta is your trusted partner in the world of bartering.</p>
          <p>Let's exchange, let's connect, let's thrive together. Welcome to Ayirbasta!</p>
        </form>
      </AboutStyled>
      <Footer/>
      </>
    );
  }
}


export default About;