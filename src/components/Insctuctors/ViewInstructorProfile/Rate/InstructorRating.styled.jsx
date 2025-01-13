import styled from "styled-components";

export const RatingWrapper = styled.div`
  margin: 20px 0;
  align-items: center;
  text-align: center;
`;

export const RatingContainer = styled.div`
  text-align: center;
`;

export const RateContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledElement = styled.div`
  max-width: 300px;
  height: 280px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
    height: 360px;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  button {
    align-self: flex-end;
  }
`;

export const StyledComment = styled.p``;

export const StyledRating = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 5px;
`;

export const StyledUser = styled.p`
  font-weight: 600;
`;
