import Router from 'next/router';
import { useEffect } from 'react';
import { readUser } from '../services/localStorage';
import LoginForm from '../templates/LoginForm';

export default function Login() {
  useEffect(() => {
    readUser() ? Router.push('/account') : Router.push('/login');
  }, []);

  return <LoginForm />;
}
