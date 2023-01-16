import renderTheme from '../../../styles/renderTheme';
import TransactionForm from '..';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<TransactionForm />', () => {
  it('should make a transaction correctly', async () => {
    renderTheme(<TransactionForm />);

    const usernameInput = screen.getByPlaceholderText('Transferir para...');
    const valueInput = screen.getByPlaceholderText('Valor (R$)');
    const transactionBtn = screen.getByRole('button', {
      name: 'Realizar transferência',
    });

    expect((usernameInput as HTMLInputElement).value).toBe('');
    expect((valueInput as HTMLInputElement).value).toBe('');

    await userEvent.type(usernameInput, 'username');
    await userEvent.type(valueInput, '5');

    expect((usernameInput as HTMLInputElement).value).toBe('username');
    expect((valueInput as HTMLInputElement).value).toBe('R$ 5');

    await userEvent.click(transactionBtn);
  });

  it('should render <TransactionForm />', () => {
    const { container } = renderTheme(<TransactionForm />);

    expect(container).toMatchSnapshot();
  });
});
