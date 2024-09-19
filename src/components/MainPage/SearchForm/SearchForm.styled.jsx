import styled from "styled-components";

export const SearchWrapper = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 35px 35px 35px 0px;
  border: 0px solid #ccc;
  background-color: var(--text-color-3);
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--text-color-3);
`;

export const InputLabel = styled.label``;

export const StyledSelect = styled.select`
  padding: 16px;
  border: 0px solid #ccc;
  width: 200px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  cursor: pointer;
  text-align: center;
  background-color: var(--text-color-3);
  &:focus {
    outline: none;
    border-color: var(--primary-color);
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
    width: 200px;
    background-color: var(--text-color-3) !important;
    border-radius: 4px;
    cursor: pointer;
    &:focus {
      outline: none;
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
