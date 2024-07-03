import React from 'react';
import { useForm } from 'react-hook-form';

 export const ChangePassword = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const newPassword = watch('newPassword');

  const onSubmit = (data) => {
    // console.log(data);

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="currentPassword">Obecne hasło</label>
        <input
          id="currentPassword"
          type="password"
          {...register('currentPassword', { required: 'To pole jest wymagane' })}
        />
        {errors.currentPassword && <p>{errors.currentPassword.message}</p>}
      </div>

      <div>
        <label htmlFor="newPassword">Nowe hasło</label>
        <input
          id="newPassword"
          type="password"
          {...register('newPassword', { 
            required: 'To pole jest wymagane',
            minLength: {
              value: 8,
              message: 'Hasło musi mieć przynajmniej 8 znaków'
            }
          })}
        />
        {errors.newPassword && <p>{errors.newPassword.message}</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Potwierdź nowe hasło</label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword', {
            required: 'To pole jest wymagane',
            validate: value =>
              value === newPassword || 'Hasła muszą być identyczne'
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit">Zmień hasło</button>
    </form>
  );
};

export default ChangePassword;
