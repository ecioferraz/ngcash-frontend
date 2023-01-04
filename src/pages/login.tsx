import Router from 'next/router';
import { useEffect } from 'react';
import ImageCard from '../components/ImageCard';
import { readUser } from '../services/localStorage';
import LoginForm from '../templates/LoginForm';

export default function Login() {
  useEffect(() => {
    readUser() ? Router.push('/account') : Router.push('/login');
  }, []);

  return (
    <main>
      <ImageCard
        altText="Logo da Ng.Cash"
        src={'../../assets/images/ngcash-logo.jpg'}
      />
      <LoginForm />
    </main>
  );
}
