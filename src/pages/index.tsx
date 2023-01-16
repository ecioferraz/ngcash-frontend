import Router from 'next/router';
import { useEffect } from 'react';
import { readUser } from '../services/localStorage';

export default function Home() {
  useEffect(() => {
    readUser() ? Router.push('/account') : Router.push('/login');
  }, []);

  return <></>;
}
