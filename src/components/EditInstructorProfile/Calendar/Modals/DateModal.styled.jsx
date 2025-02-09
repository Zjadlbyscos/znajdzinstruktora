import styled from "styled-components";
export const DateModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  left: 5%;
  padding: 30px;
  border-radius: 25px;
  z-index: 1;
  background-color: var(--background-2);
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: var(--button-primary);
  color: white;
  border: none;
  border-radius: 23px;
  cursor: pointer;
  width: 80px;
  margin-top: 10px;

  &:hover {
    background-color: var(--button-hover);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-color: var(--button-primary);

  &:hover {
    background-color: var(--button-hover);
  }
`;

export const EventForm = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const InfoInput = styled.input`
  padding: 10px 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  height: 125px;
  resize: none;
`;
