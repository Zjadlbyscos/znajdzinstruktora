export const useFilterConfig = () => {
  const filterConfig = [
    {
      label: "Dyscyplina",
      name: "discipline",
      type: "select",
      options: ["Wspinaczka"],
    },

    {
      label: "Języki",
      name: "languages",
      type: "select",
      options: [
        "Polski",
        "Angielski",
        "Niemiecki",
        "Francuski",
        "Włoski",
        "Hiszpański",
        "Ukraiński",
        "Rosyjski",
      ],
    },
    {
      label: "Miasto",
      name: "city",
      type: "select",
      options: [
        "Warszawa",
        "Kraków",
        "Łódź",
        "Wrocław",
        "Poznań",
        "Gdańsk",
        "Szczecin",
        "Bydgoszcz",
        "Lublin",
        "Katowice",
        "Białystok",
        "Gdynia",
        "Częstochowa",
        "Radom",
        "Sosnowiec",
        "Toruń",
        "Kielce",
        "Rzeszów",
        "Gliwice",
        "Zabrze",
        "Olsztyn",
        "Bielsko-Biała",
        "Bytom",
        "Zielona Góra",
      ],
    },
  ];

  return { filterConfig };
};
