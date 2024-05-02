import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px 20px 0 0;

  width: 100%;
  background: #fff;

  & .image-cont {
    height: 150px;
    background: ${(props) => (props.image ? `url(${props.image})` : "#f5f5f5")};
    background-size: contain;
    background-repeat: no-repeat;
  }

  & .info {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px 15px 20px 15px;

    & > div {
      & h3 {
        font-size: 16px;
        font-weight: 500;

        & span {
          font-weight: 400;
          font-size: 14px;
        }
      }

      & p {
        margin-top: 3px;

        font-size: 14px;
        font-weight: 400;
      }
    }
    & button {
      border: none;
      border-radius: 20px;
      cursor: pointer;

      padding: 13px 100px;
      background-color: #de8807;

      color: #ffffff;
      font-weight: 600;
      font-size: 15px;
    }
  }
`;
