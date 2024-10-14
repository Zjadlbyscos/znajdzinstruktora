import styled from "styled-components";

export const FieldWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 15px 0;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
`;

export const FormLabel = styled.label``;

export const SelectContainer = styled.select`
  margin-bottom: 10px;
  padding: 12px 8px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const SelectOption = styled.option``;

export const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 100%;
  left: 38%;
  padding-bottom: 16px;
  @media (min-width: 1024px) {
    left: 105%;
    top: 45%;
  }
`;
export const SearchButton = styled.button`
  padding: 8px 15px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 23px;
  cursor: pointer;
  width: 80px;

  @media (min-width: 768px) {
    padding: 10px 16px;
  }

  &:hover {
    background-color: var(--secondary-color);
  }
`;
