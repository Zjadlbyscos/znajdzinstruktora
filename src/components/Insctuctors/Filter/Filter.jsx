import { useState } from "react";
import { useFilterConfig } from "../../../hooks/useFilterConfig";
import {
  SearchButton,
  ButtonWrapper,
  FieldWrapper,
  Form,
  SelectContainer,
  FieldContainer,
  ShowFiltersButton,
  FilterContainer,
} from "./Filter.styled";

export const Filter = ({ setFilters }) => {
  const { filterConfig } = useFilterConfig();
  const [showFilters, setShowFilters] = useState(false);
  console.log(showFilters);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const filterValues = Object.fromEntries(formData.entries());

    setFilters(filterValues);
  };

  const handleShowFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <FilterContainer>
      <button onClick={handleShowFilters}>
        {showFilters ? "Ukryj filtry" : "Pokaż filtry"}{" "}
      </button>
      {showFilters && (
        <FieldWrapper>
          <Form onSubmit={handleSubmit}>
            {filterConfig.map((field) => (
              <FieldContainer key={field.name}>
                <label>{field.label}</label>
                <SelectContainer name={field.name}>
                  <option value="">Wybierz</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </SelectContainer>
              </FieldContainer>
            ))}
            <ButtonWrapper>
              <SearchButton type="submit">Szukaj</SearchButton>
            </ButtonWrapper>
          </Form>
        </FieldWrapper>
      )}
    </FilterContainer>
  );
};
