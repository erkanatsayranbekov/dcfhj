import styled from "styled-components";

export default styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  gap: 10px;
  width: 30%;
  margin: 0 auto;
  input, textarea {
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  textarea {
    height: 120px;
    resize: none;
  }

  button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #16ab19;
  }
`;
