import styled from "styled-components";

export default styled.div`
  display: flex;

  & .empty {
    margin-top: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 2;
    gap: 30px;

    p {
      text-align: center;
    }

    .button {
      background-color: $green;
      width: 250px;
      height: 50px;
    }
  }
  & .info {
    display: flex;
    justify-content: space-between;

    & button {
      padding: 10px 76px;
      background-color: #16ab19;
      border-radius: 20px;
      border: none;

      color: #ffffff;
      font-size: 15px;

      cursor: pointer;
    }
  }

  & .dark {
    background: #565656;
    padding: 30px;
  }

  & .light {
    background: #f9f9f9;
    padding: 30px;
  }

  table {
    padding: 20px;

    margin: auto 0;
    width: 100%;

    border-collapse: collapse;
    border-spacing: 0;

    border: 2px solid #f3f3f3;
    border-radius: 12px;

    thead {
      background-color: #f0f0f0;

      tr {
        font-size: 15px;

        th {
          font-weight: 600;
          padding: 10px 0;
        }
      }
    }

    tbody {
      tr td {
        padding: 10px 5px;

        border-left: 2px solid #f0f0f0;
        border-bottom: 2px solid #f0f0f0;
        border-collapse: collapse;

        // border-style: solid;
        text-align: center;

        & > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        h5 {
          font-size: 13px;
          font-weight: 400;
        }
        span {
          font-size: 8px;
          font-weight: 600;
        }
      }
    }

    tfoot {
      padding-top: 16px;

      tr td {
        padding-top: 15px;
      }

      ul {
        display: flex;
        justify-content: center;
        gap: 10px;
      }
    }
  }

  & .offers {
    display: flex;
    flex-direction: column;
    flex: 5;

    padding: 40px;
  }
  & .cont {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    align-items: center;
    gap: 44px;

    margin-top: 30px;
  }
`;
