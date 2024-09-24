import styled from "styled-components";

export const SearchWrapper = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  border-radius: 35px;
  background-color: var(--text-color-3);
  button {
    padding: 16px;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InputLabel = styled.label``;

export const StyledSelect = styled.select`
  padding: 16px;
  border: 0px solid #ccc;
  width: 120px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  cursor: pointer;
  text-align: center;
  border-radius: 35px;
  background-color: var(--text-color-3);
  color: var(--text-color-1);
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
  @media screen and (min-width: 768px) {
    width: 180px;
  }
  @media screen and (min-width: 1024px) {
    width: 200px;
  }
`;

export const DateInput = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--text-color-3);
  border: 0px solid var(--text-color-3);
  border-radius: 4px;
  input {
    border: 0px solid #ccc;
    padding: 8px;
    width: 100px;
    background-color: var(--text-color-3) !important;
    border-radius: 35px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    @media screen and (min-width: 768px) {
      width: 120px;
    }
    @media screen and (min-width: 1024px) {
      width: 140px;
    }
  }
  .react-datepicker-wrapper {
  }
  .react-datepicker__input-container {
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: var(--primary-color) !important;
  }
`;

export const StyledOption = styled.option`
  border: 0px solid #ccc;
`;
