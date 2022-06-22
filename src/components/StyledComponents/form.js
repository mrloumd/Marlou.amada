import styled from "styled-components";

const StyledForm = styled.div`
  margin: auto;
  margin-top: 10rem;
  background-color: white;
  width: 68%;

  .formContainer {
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
  }

  .formCard {
    overflow: hidden;
    text-align: center;
  }

  .card-border::after {
    content: "";
    position: absolute;

    border-width: 3.7em;
    border-left: 2rem;
    border-style: solid;
    border-left-color: #7fb864;
    border-right-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
    transform: translate(174%, -100%);
  }

  .header {
    color: white;
    background-color: #7fb864;
    height: 100%;
    padding: 1rem;
  }

  h4 {
    margin: auto;
  }

  .container {
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
  }

  .input-card {
  }

  button {
    border: none;
    background-color: #7fb864;
    color: white;
  }
`;

export { StyledForm };
