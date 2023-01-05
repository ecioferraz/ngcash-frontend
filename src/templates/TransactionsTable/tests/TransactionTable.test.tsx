import renderTheme from '../../../styles/renderTheme';
import TransactionTable from '..';

describe('<TransactionTable />', () => {
  it('should render <TransactionTable />', () => {
    const { container } = renderTheme(<TransactionTable />);

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

      .c0 > h1 {
        margin-bottom: 0;
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
            Você ainda não realizou transações.
          </p>
        </section>
      </div>
    `);
  });
});
