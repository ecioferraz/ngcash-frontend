import { isAxiosError } from 'axios';
import Router from 'next/router';
import { FormEvent, useState } from 'react';
import requestApi from '../../api/axios';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import TextCard from '../../components/TextCard';
import TextInput from '../../components/TextInput';
import { saveUser } from '../../services/localStorage';
import * as Styled from './styles';

export default function LoginForm() {
  const [loginInfo, setLoginInfo] = useState({
    loading: false,
    submitMethod: '',
    password: '',
    username: '',
  });
  const [error, setError] = useState('');

  const { loading, password, submitMethod, username } = loginInfo;

  const login = async () =>
    requestApi({ endpoint: 'login', method: 'get', body: loginInfo });

  const register = async () =>
    requestApi({ endpoint: 'register', method: 'post', body: loginInfo });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoginInfo((prev) => ({ ...prev, loading: true }));
      setError('');

      const { data } =
        submitMethod === 'login'
          ? await login()
          : await register().then(() => login());

      saveUser(data);
      Router.push('/account');
    } catch (err) {
      if (isAxiosError(err)) setError(err.response?.data.message);
    } finally {
      setLoginInfo((prev) => ({ ...prev, loading: false, submitMethod: '' }));
    }
  };

  return (
    <Styled.Container onSubmit={handleSubmit}>
      <TextCard size="large">Bem-vindo(a)!</TextCard>
      <section>
        <TextInput
          handleChange={({ target: { value } }) =>
            setLoginInfo((prev) => ({ ...prev, username: value }))
          }
          placeholder="Username"
          value={username}
        />
        <TextInput
          handleChange={({ target: { value } }) =>
            setLoginInfo((prev) => ({ ...prev, password: value }))
          }
          placeholder="Password"
          value={password}
        />
        {error && (
          <TextCard as="p" size="xsmall">
            {error}
          </TextCard>
        )}
      </section>
      <section>
        <Button
          disabled={!password || !username}
          handleClick={() =>
            setLoginInfo((prev) => ({ ...prev, submitMethod: 'login' }))
          }
          type="submit"
        >
          Login
        </Button>
        <Button
          disabled={!password || !username}
          handleClick={() =>
            setLoginInfo((prev) => ({ ...prev, submitMethod: 'register' }))
          }
          type="submit"
        >
          Register
        </Button>
      </section>
      {loading && <Loading />}
    </Styled.Container>
  );
}
