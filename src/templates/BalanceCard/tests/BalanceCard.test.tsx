import renderTheme from '../../../styles/renderTheme';
import BalanceCard from '..';

describe('<BalanceCard />', () => {
  it('should render <BalanceCard />', async () => {
    const { container } = renderTheme(<BalanceCard />);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.6rem;
        text-transform: none;
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
            class="c0"
          >
            R$ 
          </p>
        </section>
      </div>
    `);
  });
});
