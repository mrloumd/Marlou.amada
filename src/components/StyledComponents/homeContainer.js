import styled from "styled-components";

const StyledContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
`;

const StyledCard = styled.div`
  overflow: hidden;
  flex: 1;

  .tagLine {
    padding: 1rem;
    margin-top: 10rem;
    width: 51%;
    background: linear-gradient(
      160.23deg,
      #f4f4f4 6.49%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  img {
    transform: translate(40%, 0);
  }
`;

export { StyledContainer, StyledCard };
