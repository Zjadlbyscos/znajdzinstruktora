
export const useChangePassword = () => {

    const useChangePassword=
    [
{
    label: "Obecne hasło",
    name: "currentPassword",
    type: "password",
    validation: { required: "Obecne hasło jest wymagane." },
  },
  {
    label: "Nowe hasło",
    name: "newPassword",
    type: "password",
    validation: {
      required: "Nowe hasło jest wymagane.",
      minLength: {
        value: 6,
        message: "Hasło musi mieć przynajmniej 6 znaków.",
      },
    },
  },
  {
    label: "Powtórz nowe hasło",
    name: "confirmNewPassword",
    type: "password",
    validation: {
      required: "Powtórz nowe hasło jest wymagane.",
      validate: (value, { newPassword }) =>
        value === newPassword || "Hasła nie są takie same.",
    },

  },
]
return useChangePassword }