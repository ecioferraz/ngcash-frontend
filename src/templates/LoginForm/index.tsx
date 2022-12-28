import { isAxiosError } from 'axios';
import Router from 'next/router';
import { FormEvent, useState } from 'react';
import requestApi from '../../api/axios';
import Button from '../../components/Button';
import TextCard from '../../components/TextCard';
import TextInput from '../../components/TextInput';
import { saveUser } from '../../services/localStorage';
import * as Styled from './styles';

export default function LoginForm() {
  const [login, setLogin] = useState({
    loading: false,
    submitMethod: '',
    password: '',
    username: '',
  });
  const [error, setError] = useState('');

  const { loading, password, submitMethod, username } = login;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLogin((prev) => ({ ...prev, loading: true }));
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
      setLogin((prev) => ({ ...prev, loading: false, submitMethod: '' }));
    }
  };

  return (
    <Styled.Container onSubmit={handleSubmit}>
      <TextCard>Bem-vindo(a)!</TextCard>
      <TextInput
        handleChange={({ target: { value } }) =>
          setLogin((prev) => ({ ...prev, username: value }))
        }
        placeholder="Username"
        value={username}
      />
      <TextInput
        handleChange={({ target: { value } }) =>
          setLogin((prev) => ({ ...prev, password: value }))
        }
        placeholder="Password"
        value={password}
      />
      <TextCard as="p" size="xsmall">
        {error}
      </TextCard>
      <Button
        disabled={!password || !username}
        handleClick={() =>
          setLogin((prev) => ({ ...prev, submitMethod: 'login' }))
        }
        type="submit"
      >
        Login
      </Button>
      <Button
        disabled={!password || !username}
        handleClick={() =>
          setLogin((prev) => ({ ...prev, submitMethod: 'register' }))
        }
        type="submit"
      >
        Register
      </Button>
    </Styled.Container>
  );
}
