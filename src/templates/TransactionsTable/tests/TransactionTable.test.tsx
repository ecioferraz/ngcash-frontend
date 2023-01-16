import renderTheme from '../../../styles/renderTheme';
import TransactionTable from '..';
import { transactionsMock } from './mocks';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AccountProvider from '../../../providers/AccountProvider';

describe('<TransactionTable />', () => {
  describe('with transactions history', () => {
    let container: HTMLElement;

    beforeEach(() => {
      container = renderTheme(
        <AccountProvider>
          <TransactionTable transactions={transactionsMock} />,
        </AccountProvider>,
      ).container;
    });

    it('should render <TransactionTable /> with transactions history', () => {
      expect(container).toMatchSnapshot();
    });

    it('should select a different type of transaction', async () => {
      const select = screen.getByRole('combobox');
      const all = screen.getByRole('option', { name: 'Todas' });
      const cashIn = screen.getByRole('option', { name: 'Entradas' });

      expect((all as HTMLOptionElement).selected).toBe(true);

      await userEvent.selectOptions(select, cashIn);

      expect((cashIn as HTMLOptionElement).selected).toBe(true);
    });

    it('should render a different svg button when the order of transactions gets changed', async () => {
      let dropDown = container.querySelector('svg[name="desc"]');

      expect(dropDown).toBeInTheDocument();

      await userEvent.click(dropDown?.parentElement as HTMLButtonElement);

      const dropUp = container.querySelector('svg[name="asc"]');

      expect(dropUp).toBeInTheDocument();

      await userEvent.click(dropUp?.parentElement as HTMLButtonElement);

      dropDown = container.querySelector('svg[name="desc"]');

      expect(dropDown).toBeInTheDocument();
    });

    it("should render 'Mostrar menos' button", async () => {
      const showMoreBtn = screen.getByRole('button', { name: 'Mostrar mais' });

      expect(showMoreBtn).toBeInTheDocument();

      await userEvent.click(showMoreBtn);

      const showLessBtn = screen.getByRole('button', { name: 'Mostrar menos' });

      expect(showLessBtn).toBeInTheDocument();
    });
  });

  describe('without transactions history', () => {
    it('should render <Loading />', () => {
      const { container } = renderTheme(<TransactionTable loading />);

      expect(container).toMatchSnapshot();
    });

    it('should render a message when there are no transactions to show', () => {
      renderTheme(<TransactionTable />);

      expect(
        screen.getByText('Você ainda não realizou transações.'),
      ).toBeInTheDocument();
    });

    it('should render <TransactionTable /> with an error message', () => {
      const { container } = renderTheme(
        <TransactionTable error="Unauthorized" />,
      );

      expect(container).toMatchInlineSnapshot(`
        .c1 {
          font-size: 3.2rem;
          text-transform: uppercase;
        }

        .c2 {
          font-size: 1.6rem;
          text-transform: none;
        }

        .c0 {
          text-align: center;
          width: 100%;
        }

        .c0 > * {
          margin: 2rem 0;
        }

        .c0 > h1 {
          margin-bottom: 0;
          margin-top: 1rem;
        }

        .c0 > button {
          margin-top: 0;
        }

        @media (max-width:768px) {
          .c0 {
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
          }
        }

        <div>
          <section
            class="c0"
          >
            <h1
              class="c1"
            >
              Histórico de transações
            </h1>
            <p
              class="c2"
            >
              Unauthorized
            </p>
          </section>
        </div>
      `);
    });
  });
});
