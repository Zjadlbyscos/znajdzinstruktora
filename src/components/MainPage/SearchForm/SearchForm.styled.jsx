import styled from "styled-components";

export const SearchWrapper = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  border-radius: 35px;
  background-color: var(--text-color-3);
  button {
    padding: 12px;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
`;

export const InputLabel = styled.label``;

export const StyledSelect = styled.select`
  border: 0px solid #ccc;
  width: 100px;
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
  @media screen and (min-width: 480px) {
    width: 120px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 180px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 20px;
    width: 200px;
  }
`;

export const DateInput = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--text-color-3);
  border: 0px solid var(--text-color-3);
  border-radius: 4px;
  z-index: 11;
  input {
    border: 0px solid #ccc;
    width: 80px;
    background-color: var(--text-color-3) !important;
    border-radius: 35px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    @media screen and (min-width: 480px) {
      width: 100px;
      padding: 6px;
    }
    @media screen and (min-width: 768px) {
      width: 120px;
      padding: 8px;
    }
    @media screen and (min-width: 1024px) {
      width: 140px;
    }
  }
  .react-datepicker {
    font-size: 14px;
    @media screen and (min-width: 768px) {
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
