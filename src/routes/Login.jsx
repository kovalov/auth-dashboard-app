import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthContext } from '../context/authContext';
import { Layout } from '../components/Layout';

const schema = yup
  .object({
    username: yup
      .string()
      .required('No username provided.')
      .min(4, 'Username is too short - should be 4 chars minimum.')
      .matches(/[A-Za-z0-9]/, 'Password can only contain Latin letters and numbers.'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[A-Za-z0-9]/, 'Password can only contain Latin letters and numbers.')
  })
  .required();

export const Login = () => {
  const { isLogged, isLoading, serverError, signin } = useContext(AuthContext);
  // const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = ({ username, password }) => {
    signin(username, password);
    if (isLogged) {
      // navigation('/dashboard');
      return redirect('/dashboard');
    }
  };

  return (
    <Layout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
          Username
          <input
            {...register('username')}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            aria-invalid={errors.username || serverError ? 'true' : ''}
            disabled={isLoading ? true : false}
          />
          <small>{errors.username?.message || serverError}</small>
        </label>

        <label htmlFor="password">
          Password
          <input
            {...register('password')}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            aria-invalid={errors.password || serverError ? 'true' : ''}
            disabled={isLoading ? true : false}
          />
          <small>{errors.password?.message || serverError}</small>
        </label>

        <button type="submit" aria-busy={isLoading}>
          Submit
        </button>
      </form>
    </Layout>
  );
};
