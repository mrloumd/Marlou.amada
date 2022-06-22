import styled from "styled-components";

const StyledForm = styled.div`
  margin: auto;
  margin-top: 10rem;
  background-color: white;
  width: 65%;

  .formContainer {
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
  }

  .formCard {
    overflow: hidden;
    text-align: center;
  }

  .header {
    color: white;
    background-color: #7fb864;
    height: 100%;
    padding: 1rem;
  }

  .container {
    padding: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
    width: 100%;
  }

  .col-auto {
    width: 30%;
  }

  h4 {
    text-align: center;
  }

  button {
    border: none;
    background-color: #7fb864;
    color: white;
  }
`;

export { StyledForm };
