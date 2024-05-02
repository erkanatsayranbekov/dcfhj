import styled from "styled-components";

export default styled.div`
  display: flex;
  gap: 66px;
  & .main-pic {
    & img {
      height: 99.5vh;
      width: auto;
    }
  }

  .link {
    color: $orange !important;
    font-size: 22px;
  }

  & .form {
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

    &__main {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-top: 5px;

      &-info {
        & p {
          margin-top: 20px;
          font-family: "Montserrat";
          font-weight: 500;
          font-size: 20px;
        }

        & input {
          width: 100%;
          border: 1px solid #848484;
          border-radius: 25px;
          padding: 20px;
        }
      }
    }
    & span {
      color: #de8807;
      font-size: 22px;
      line-height: 27px;
      font-family: "Montserrat";
    }

    & button {
      margin-top: 30px;
      width: 100%;
      padding: 13px 107px;
      background-color: #16ab19;
    }
  }
`;
