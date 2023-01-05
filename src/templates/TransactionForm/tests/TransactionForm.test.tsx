import renderTheme from '../../../styles/renderTheme';
import TransactionForm from '..';

describe('<TransactionForm />', () => {
  it('should render <TransactionForm />', () => {
    const { container } = renderTheme(<TransactionForm />);

    expect(container).toMatchInlineSnapshot(`
      .c1 {
        background: #000000;
        border: 1px solid #000000;
        border-radius: 4px;
        box-shadow: #DDDDDD 3px 3px 0 0,#000000 3px 3px 0 1px;
        box-sizing: border-box;
        color: #DDDDDD;
        cursor: pointer;
        display: inline-block;
        line-height: 20px;
        overflow: visible;
        padding: 6px 24px;
        touch-action: manipulation;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-select: none;
        vertical-align: middle;
        white-space: nowrap;
      }

      .c1:disabled {
        pointer-events: none;
      }

      .c1:focus {
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c1:hover {
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c1:not([disabled]):active {
        background: #DDDDDD;
        outline: 0;
        -webkit-transition: none;
        transition: none;
        box-shadow: #DDDDDD 2px 2px 0 0,#000000 2px 2px 0 1px;
        -webkit-translate: 2px,2px;
        translate: 2px,2px;
      }

      .c1:has(svg) {
        padding: 0.5% 0.7%;
      }

      .c1 > svg {
        height: 1.6rem;
        width: 1.6rem;
      }

      .c0 {
        background: transparent;
        border: none;
        border-bottom: solid 1px #DDDDDD;
        color: #FFFFFF;
        font-size: 1.6rem;
        outline: none;
      }

      .c0:focus {
        border: none;
        border-bottom: 1px solid #00D775;
        outline: none;
      }

      <div>
        <form
          class=""
        >
          <section>
            <input
              class="c0"
              list="usernames"
              placeholder="Transferir para..."
              type="text"
              value=""
            />
            <datalist
              id="usernames"
            />
            <input
              class="c0"
              placeholder="Valor (R$)"
              type="text"
              value=""
            />
          </section>
          <section>
            <button
              class="c1"
              disabled=""
              type="submit"
            >
              Realizar transferência
            </button>
          </section>
        </form>
      </div>
    `);
  });
});
