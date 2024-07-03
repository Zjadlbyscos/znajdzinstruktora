export const useFormConfig = () => {
  const formConfig = [
    {
      label: "Imię",
      name: "firstName",
      type: "text",
      validation: { required: `Pole "Imię" jest wymagane.` },
    },
    {
      label: "Nazwisko",
      name: "lastName",
      type: "text",
      validation: { required: `Pole "Nazwisko" jest wymagane.` },
    },
    {
      label: "Email",
      name: "email",
      type: "text",
      validation: {
        required: `Pole "Email" jest wymagane.`,
        pattern: {
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: "Nieprawidłowy format email.",
        },
      },
    },
    {
      label: "Hasło",
      name: "password",
      type: "password",
      validation: {
        required: `Pole "Hasło" jest wymagane.`,
        minLength: {
          value: 6,
          message: "Hasło musi mieć przynajmniej 6 znaków.",
        },
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
          message:
            "Hasło musi zawierać przynajmniej jedną dużą literę, jedną małą literę i jedną cyfrę.",
        },
      },
    },
    {
      label: "Powtórz hasło",
      name: "confirmPassword",
      type: "password",
      validation: {
        required: `Pole "Powtórz hasło" jest wymagane.`,
        validate: (value, context) =>
          value === context.password || "Hasła nie są takie same.",
      },
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
      validation: { required: `Pole "Miasto" jest wymagane.` },
    },
    {
      label: "Dyscyplina sportu",
      name: "discipline",
      type: "select",
      options: ["Wspinaczka"],
      validation: { required: `Pole "Dyscyplina" sportu jest wymagane.` },
    },
    {
      label: "Akceptuję regulamin i politykę prywatności.*",
      name: "terms",
      type: "checkbox",
      validation: {
        required: "Akceptacja regulaminu i polityki prywatności jest wymagana.",
      },
    },
    {
      label:
        "Wyrażam zgodę na udostępnienie podanego wyżej adresu E-mail dla użytkowników poszukujących instruktora.*",
      name: "emailConsent",
      type: "checkbox",
      validation: {
        required:
          "Wyrażenie zgody na udostępnienie adresu E-mail jest wymagane.",
      },
    },
  ];
  return formConfig;
};
