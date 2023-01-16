import renderTheme from '../../../styles/renderTheme';
import LoginForm from '..';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<LoginForm />', () => {
  it('should register correctly', async () => {
    renderTheme(<LoginForm />);

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const registerBtn = screen.getByRole('button', { name: 'Register' });

    expect((usernameInput as HTMLInputElement).value).toBe('');
    expect((passwordInput as HTMLInputElement).value).toBe('');

    await userEvent.type(usernameInput, 'username');
    await userEvent.type(passwordInput, 'P4ssword!');

    expect((usernameInput as HTMLInputElement).value).toBe('username');
    expect((passwordInput as HTMLInputElement).value).toBe('P4ssword!');
    // actually making requests
    await userEvent.click(registerBtn);
  });

  it('should login correctly', async () => {
    renderTheme(<LoginForm />);

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginBtn = screen.getByRole('button', { name: 'Login' });

    expect((usernameInput as HTMLInputElement).value).toBe('');
    expect((passwordInput as HTMLInputElement).value).toBe('');

    await userEvent.type(usernameInput, 'username');
    await userEvent.type(passwordInput, 'P4ssword!');

    expect((usernameInput as HTMLInputElement).value).toBe('username');
    expect((passwordInput as HTMLInputElement).value).toBe('P4ssword!');

    await userEvent.click(loginBtn);
  });

  it('should render <LoginForm />', () => {
    const { container } = renderTheme(<LoginForm />);

    expect(container).toMatchSnapshot();
  });
});
