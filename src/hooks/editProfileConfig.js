export const editProfileConfig = () => {
  const classLevel = [
    {
      label: "rodzaj zajęc",
      name: "classes",
      type: "checkbox",
      options: [
        "Sekcja Początkująca",
        "Sekcja Średniozaawansowana",
        "Sekcja Zaawansowana",
        "Sekcja dla dzieci",
        "Sekcja dla młodzieży 11-14 lat,",
        "Sekcja dla młodzieży 14-18lat",
        "Zajęcia Indywidualne",
        "Dla osób z niepełnosprawnościami",
        "Plan Treningowy",
      ],
    },
  ];

  const languages = [
    {
      label: "język",
      name: "languages",
      type: "checkbox",
      options: ["Polski", "Angielski", "Niemiecki", "Francuski"],
    },
  ];
  return { classLevel, languages };
};
