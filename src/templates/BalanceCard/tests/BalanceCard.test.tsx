import renderTheme from '../../../styles/renderTheme';
import BalanceCard from '..';

describe('<BalanceCard />', () => {
  it('should render <BalanceCard />', () => {
    const { container } = renderTheme(<BalanceCard balance="100.00" />);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-size: 3.2rem;
        text-transform: none;
      }

      .c1 {
        font-size: 6.4rem;
        text-transform: none;
      }

      @media (max-width:768px) {
        .c1 {
          font-size: 4.0rem;
        }
      }

      <div>
        <section
          class=""
        >
          <h6
            class="c0"
          >
            Saldo
          </h6>
          <p
            class="c1"
          >
            R$ 
            100,00
          </p>
        </section>
      </div>
    `);
  });
});
