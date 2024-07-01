import React from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password');

  const formConfig = [
    { label: 'Imię', name: 'firstName', type: 'text', validation: { required: 'Imię jest wymagane.' } },
    { label: 'Nazwisko', name: 'lastName', type: 'text', validation: { required: 'Nazwisko jest wymagane.' } },
    { 
      label: 'Email', name: 'email', type: 'text', validation: { 
        required: 'Email jest wymagany.',
        pattern: { 
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
          message: 'Nieprawidłowy format email.' 
        } 
      } 
    },
    { 
      label: 'Hasło', name: 'password', type: 'password', validation: { 
        required: 'Hasło jest wymagane.', 
        minLength: { value: 6, message: 'Hasło musi mieć przynajmniej 6 znaków.' } 
      } 
    },
    { 
      label: 'Powtórz hasło', name: 'confirmPassword', type: 'password', validation: { 
        required: 'Powtórz hasło jest wymagane.',
        validate: value => value === password || 'Hasła nie są takie same.'
      } 
    },
    { 
      label: 'Miasto', name: 'city', type: 'select', options: [
        'Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań', 'Gdańsk', 'Szczecin', 
        'Bydgoszcz', 'Lublin', 'Katowice', 'Białystok', 'Gdynia', 'Częstochowa', 
        'Radom', 'Sosnowiec', 'Toruń', 'Kielce', 'Rzeszów', 'Gliwice', 'Zabrze', 
        'Olsztyn', 'Bielsko-Biała', 'Bytom', 'Zielona Góra'
      ], validation: { required: 'Miasto jest wymagane.' } 
    },
    { 
      label: 'Dyscyplina sportu', name: 'sport', type: 'select', options: ['Wspinaczka'], 
      validation: { required: 'Dyscyplina sportu jest wymagana.' } 
    },
    { 
      label: 'Akceptuję regulamin i politykę prywatności.*', name: 'terms', type: 'checkbox', 
      validation: { required: 'Akceptacja regulaminu i polityki prywatności jest wymagana.' } 
    },
    { 
      label: 'Wyrażam zgodę na udostępnienie podanego wyżej adresu E-mail dla użytkowników poszukujących instruktora.', 
      name: 'emailConsent', type: 'checkbox', 
      validation: { required: 'Wyrażenie zgody na udostępnienie adresu E-mail jest wymagane.' } 
    }
  ];

  const onSubmit = data => {
    console.log(data);

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formConfig.map(field => (
        <div key={field.name}>
          <label>{field.label}</label>
          {field.type === 'select' ? (
            <select {...register(field.name, field.validation)}>
              <option value="">Wybierz</option>
              {field.options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input type={field.type} {...register(field.name, field.validation)} />
          )}
          {errors[field.name] && <p>{errors[field.name].message}</p>}
        </div>
      ))}
      <button type="submit">Zarejestruj</button>
    </form>
  );
};

export default RegistrationForm;
