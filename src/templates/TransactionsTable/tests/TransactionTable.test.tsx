import renderTheme from '../../../styles/renderTheme';
import TransactionTable from '..';

describe('<TransactionTable />', () => {
  it('should render <TransactionTable />', () => {
    const { container } = renderTheme(<TransactionTable />);

    expect(container).toMatchInlineSnapshot(`
      .c2 {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
      }

      .c1 > svg {
        height: 1.6rem;
        width: 1.6rem;
      }

      .c0 {
        font-size: 5.6rem;
        text-transform: none;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 4.0rem;
        }
      }

      <div>
        <section
          class=""
        >
          <h1
            class="c0"
          >
            Histórico de transações
          </h1>
          <select
            class=""
          >
            <option
              value="all"
            >
              Todas
            </option>
            <option
              value="cash-in"
            >
              Entradas
            </option>
            <option
              value="cash-out"
            >
              Saídas
            </option>
          </select>
          <button
            class="c1"
            type="button"
          >
            <svg
              aria-hidden="true"
              class="c2"
              fill="currentColor"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m7 10 5 5 5-5H7z"
              />
            </svg>
          </button>
          <table
            class=""
          >
            <thead>
              <tr>
                <th>
                  De/para
                </th>
                <th>
                  Valor (R$)
                </th>
                <th>
                  Tipo
                </th>
                <th>
                  Data
                </th>
              </tr>
            </thead>
            <tbody />
          </table>
        </section>
      </div>
    `);
  });
});
