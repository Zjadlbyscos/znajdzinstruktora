import React from 'react';
import { useDispatch } from "react-redux";
import { useForm, Controller } from 'react-hook-form';
import { useFormConfig } from '../../../hooks/useFormConfig';
import { changePassword } from '../../../redux/auth/operations';

const ChangePassword = () => {
  const { handleSubmit, control, formState: { errors }, watch } = useForm();
  const formConfig = useFormConfig();
  const dispatch = useDispatch();


  const onSubmit = (data) => {
    const { confirmPassword, ...filteredData } = data;
    dispatch(changePassword(filteredData))

  };

  const newPassword = watch('newPassword');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formConfig.map(({ label, name, type, validation, options }) => {
        if (name === 'newPassword') validation.validate = value => value === newPassword || "Hasła nie są takie same";
        return (
          <div key={name}>
            <label htmlFor={name}>{label}</label>
            {type === 'select' ? (
              <Controller
                name={name}
                control={control}
                rules={validation}
                render={({ field }) => (
                  <select {...field}>
                    {options.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                )}
              />
            ) : (
              <Controller
                name={name}
                control={control}
                rules={validation}
                render={({ field }) => (
                  <input
                    id={name}
                    type={type}
                    {...field}
                  />
                )}
              />
            )}
            {errors[name] && <p>{errors[name].message}</p>}
          </div>
        );
      })}
      <button type="submit">Zmień hasło</button>
    </form>
  );
};

export default ChangePassword;
