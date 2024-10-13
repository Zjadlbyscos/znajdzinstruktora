import { useFilterConfig } from "../../../hooks/useFilterConfig";

export const Filter = ({ setFilters }) => {
  const { filterConfig } = useFilterConfig();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const filterValues = Object.fromEntries(formData.entries());

    setFilters(filterValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {filterConfig.map((field) => (
          <div key={field.name}>
            <label>{field.label}</label>
            <select name={field.name}>
              <option value="">Wybierz</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type="submit">Szukaj</button>
      </form>
    </div>
  );
};
