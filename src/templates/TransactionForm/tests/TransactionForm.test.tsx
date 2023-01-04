import renderTheme from '../../../styles/renderTheme';
import TransactionForm from '..';

describe('<TransactionForm />', () => {
  it('should render <TransactionForm />', () => {
    const { container } = renderTheme(<TransactionForm />);

    expect(container).toMatchInlineSnapshot(`
      .c0 > svg {
        height: 1.6rem;
        width: 1.6rem;
      }

      <div>
        <form
          class=""
        >
          <input
            class=""
            placeholder="Transferir para..."
            type="text"
            value=""
          />
          <input
            class=""
            placeholder="Valor (R$)"
            type="text"
            value=""
          />
          <button
            class="c0"
            disabled=""
            type="submit"
          >
            Realizar transferência
          </button>
        </form>
      </div>
    `);
  });
});
