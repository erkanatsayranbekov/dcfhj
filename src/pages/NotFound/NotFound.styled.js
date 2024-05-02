import styled from "styled-components";

export default styled.div`
  display: flex;
  gap: 66px;
  & .main-pic {
    & img {
      max-width: 100%;
    }
  }

      &-info {
        & p {
          margin-top: 20px;
          font-family: "Montserrat";
          font-weight: 500;
          font-size: 20px;
        }

        & input {
          width: 570px;
          height: 70px;
          border: 1px solid #848484;
          border-radius: 25px;

          font-size: 20px;
          padding-left: 20px;
        }
      }
    }
    & span {
      color: #de8807;
      font-size: 22px;
      line-height: 27px;
      font-family: "Montserrat";
    }
  }
`;
