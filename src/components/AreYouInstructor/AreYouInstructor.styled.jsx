import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 36px;
`;
export const Content = styled.div`
  width: 80vw;
  max-width: 1024px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: var(--background-2);
  gap: 39px;
  @media (min-width: 768px) {
    padding: 50px;
  }
  @media (min-width: 1024px) {
    padding: 100px;
  }
`;
export const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  @media (min-width: 768px) {
    max-width: 30vw;
  }

  p {
    text-align: center;
  }
`;
