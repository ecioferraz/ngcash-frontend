import renderTheme from '../../../styles/renderTheme';
import TransactionForm from '..';

describe('<TransactionForm />', () => {
  it('should render <TransactionForm />', () => {
    const { container } = renderTheme(<TransactionForm />);

    expect(container).toMatchInlineSnapshot(`
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
            class=""
            type="submit"
          >
            Realizar transferência
          </button>
        </form>
      </div>
    `);
  });
});
