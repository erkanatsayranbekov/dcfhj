import React, { useContext, useState } from "react";

import { barterOffers } from "../../assets/data/barterOffers";
import { barterOffersSecond } from "../../assets/data/barterOffersSecond";
import BarterMenu from "../../components/BarterMenu/BarterMenu";
import Header from "../../components/Header";

import card from "../../assets/img/shoppingCartBig.svg";
import { Link } from "react-router-dom";
import OffersStyled from "./Offers.styled";
import Offer from "components/Offer";
import ThemeContext from "pages/context/ThemeContext";

const Profile = () => {
  const combinedOffers = [...barterOffers, ...barterOffersSecond];
  
  const [offers, setOffers] = useState(combinedOffers);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeClass = theme === "light" ? "light" : "dark";

  const objectOffer1 = {
    id: 11,
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61XGsYf-LoL._AC_UF894,1000_QL80_.jpg",
    name: "Bluetooth Headphones",
    user_email: "audiofanatic@example.com",
    category: "Electronics",
    address: "Almaty, Kazakhstan",
    services: "Electronics Repair",
  };
  const objectOffer2 = {
    id: 12,
    image:
      "https://www.prioritybicycles.com/cdn/shop/products/600_August_2022_Hero.jpg?v=1661804909&width=1500",
    name: "Bicycle",
    user_email: "test_email@gmail.com",
    category: "Item",
    address: "Astana, Kazakhstan",
    services: "Bicycle , Shoeshine",
    description:
      "Offers expert makeup services along with bicycle repair and shoeshine.",
  };

  const handleDeleteOffer = (offerId) => {
    setOffers(offers.filter((offer) => offer.id !== offerId));
  };

  const combinedObjects = { ...objectOffer1, ...objectOffer2 };
  return (
    <>
      <Header />
      <OffersStyled>
        <BarterMenu linkActive="items" />
        <div className="offers">
          <div className="info">
            <h2>Active Offers</h2>
            <Link to={"/offers/add-offer"}>
              <button>ADD OFFER</button>
            </Link>
          </div>
          {offers != null ? (
            <div className={`cont ` + `${theme}`}>
              {offers.map((barter) => (
                <Offer
                  key={barter.id}
                  id={barter.id}
                  name={barter.name}
                  category={barter.category}
                  address={barter.address}
                  services={barter.services}
                  image={barter.image}
                  status={barter.status}
                  onDelete={() => handleDeleteOffer(barter.id)}
                />
              ))}

              <Offer
                id={combinedObjects.id}
                name={combinedObjects.name}
                category={combinedObjects.category}
                address={combinedObjects.address}
                services={combinedObjects.services}
                image={combinedObjects.image}
                status={combinedObjects.status}
              />
            </div>
          ) : (
            <div className="empty">
              <img src={card} alt="" />
              <p>You still haven't added a product/service to exchange.</p>
              <div className="button">ADD OFFER</div>
            </div>
          )}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th colSpan={2}>City</th>
                <th>Changes</th>
                <th>See item</th>
              </tr>
            </thead>

            <tbody>
              {offers.map((offer) => (
                <tr key={offer.id}>
                  <td>{offer.name}</td>
                  <td>{offer.category}</td>
                  <td>{offer.address.split(",", 1)}</td>
                  <td>{offer.address.split(",")[1].trim()}</td>
                  <td>{offer.products}</td>
                  <td>
                    <Link to={`/product/${offer.id}`}>Click here to see</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table
            style={{
              width: "100%",
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            <tr
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
              }}
            >
              <th>Name</th>
              <td
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                }}
              >
                Test
              </td>
            </tr>
            <tr
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
              }}
            >
              <th rowspan="2">Items</th>
              <td
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                }}
              >
                Item 1
              </td>
            </tr>
            <tr
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
              }}
            >
              <td
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                }}
              >
                Item 2
              </td>
            </tr>
          </table>
          Current theme is: {theme}
          <button
            onClick={toggleTheme}
            style={{
              padding: "10px 20px",
              background: "black",
              borderRadius: "10px",
            }}
          >
            Toggle Theme
          </button>
        </div>
      </OffersStyled>
    </>
  );
};

export default Profile;
