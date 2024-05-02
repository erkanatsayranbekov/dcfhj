import styled from "styled-components";

export default styled.div`
  display: flex;
  gap: 66px;
  & .main-pic {
    & img {
      height: 80vh;
      width: auto;
    }
  }
  .link {
    color: $orange !important;
    font-size: 22px;
  }

  & .form {
    // margin-top: 180px;
    align-self: center;
    & h1 {
      font-family: "Montserrat";
      font-weight: 600;
      font-size: 35px;
      color: #222222;
    }

    & p {
      margin-top: 10px;

      font-weight: 300;
      font-size: 22px;
      line-height: 28px;
    }

    & span {
      color: #de8807;
      font-size: 22px;
      line-height: 27px;
      font-family: "Montserrat";
    }
  }
`;
