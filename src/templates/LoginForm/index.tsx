import { isAxiosError } from 'axios';
import Router from 'next/router';
import { FormEvent, useState } from 'react';
import requestApi from '../../api/axios';
import Button from '../../components/Button';
import Heading from '../../components/TextCard';
import TextInput from '../../components/TextInput';
import { saveUser } from '../../services/localStorage';
import * as Styled from './styles';

export default function LoginForm() {
  const [login, setLogin] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitMethod, setSubmitMethod] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError('');

      const { data } = await requestApi({
        endpoint: submitMethod,
        method: submitMethod === 'login' ? 'get' : 'post',
        body: login,
      });

      saveUser(data);
      Router.push('/account');
    } catch (err) {
      if (isAxiosError(err)) setError(err.response?.data.message);
    } finally {
      setIsLoading(false);
      setSubmitMethod('');
    }
  };

  return (
    <Styled.Container onSubmit={handleSubmit}>
      <Heading>Bem-vindo(a)!</Heading>
      <TextInput
        handleChange={({ target: { value } }) =>
          setLogin((prev) => ({ ...prev, username: value }))
        }
        placeholder="Username"
        value={login.username}
      />
      <TextInput
        handleChange={({ target: { value } }) =>
          setLogin((prev) => ({ ...prev, password: value }))
        }
        placeholder="Password"
        value={login.password}
      />
      <Heading as="h6">{error}</Heading>
      <Button
        disabled={!login.password || !login.username}
        handleClick={() => setSubmitMethod('login')}
        type="submit"
      >
        Login
      </Button>
      <Button
        disabled={!login.password || !login.username}
        handleClick={() => setSubmitMethod('register')}
        type="submit"
      >
        Register
      </Button>
    </Styled.Container>
  );
}
