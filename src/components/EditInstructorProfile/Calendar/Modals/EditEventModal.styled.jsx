import styled from "styled-components";
export const EditEventContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 35%;
  padding: 23px 5px;
  border-radius: 25px;
  z-index: 1;
  background-color: var(--background-2);
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const EventInfoContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
