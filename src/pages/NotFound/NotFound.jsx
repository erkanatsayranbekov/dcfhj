import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Not Found</h1>
      <p style={styles.paragraph}>
        Sorry, the requested page was not found. Please return to <br />
        <Link to="/" style={styles.link}>
          Home page
        </Link>
        .
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Poppins",
    marginBottom: "150px",
    
  },
  heading: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#333",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#555",
  },
  link: {
    color: "#007bff",
    textDecoration: "underline",
  },
};

export default NotFound;