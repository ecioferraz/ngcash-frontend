import renderTheme from '../../../styles/renderTheme';
import BalanceCard from '..';

describe('<BalanceCard />', () => {
  it('should render <BalanceCard />', async () => {
    const { container } = renderTheme(<BalanceCard balance="100" />);

    expect(container).toMatchInlineSnapshot(`
      .c1 {
        font-size: 1.6rem;
        text-transform: none;
      }

      .c0 {
        -webkit-backdrop-filter: blur(2px);
        backdrop-filter: blur(2px);
        border-radius: 15px;
        background: #FFFFFF;
        box-shadow: rgba(0,0,0,0.2) 0px 12px 28px 0px,rgba(0,0,0,0.1) 0px 2px 4px 0px,rgba(255,255,255,0.05) 0px 0px 0px 1px inset;
        color: #000000;
        padding: 0.5rem;
        width: 30rem;
      }

      .c0 > h6,
      .c0 p {
        margin: 1rem;
      }

      <div>
        <section
          class="c0"
        >
          <h6
            class="c1"
          >
            Saldo
          </h6>
          <p
            class="c1"
          >
            100
          </p>
        </section>
      </div>
    `);
  });
});
