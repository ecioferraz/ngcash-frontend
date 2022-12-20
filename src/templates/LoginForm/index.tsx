import Button from '../../components/Button';
import Heading from '../../components/Heading';
import TextInput from '../../components/TextInput';
import * as Styled from './styles';

export default function LoginForm() {
  return (
    <Styled.Container>
      <Heading>Bem-vindo(a)!</Heading>
      <TextInput
        handleChange={() => {
          return;
        }}
        placeholder="Username"
      />
      <TextInput
        handleChange={() => {
          return;
        }}
        placeholder="Password"
      />
      <Button
        handleClick={() => {
          return;
        }}
      >
        Login
      </Button>
      <Button
        handleClick={() => {
          return;
        }}
      >
        Register
      </Button>
    </Styled.Container>
  );
}
