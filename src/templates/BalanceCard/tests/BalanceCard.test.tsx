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

  it('should render <BalanceCard /> with an error message', async () => {
    const { container } = renderTheme(<BalanceCard error="Unauthorized" />);

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
            Unauthorized
          </p>
        </section>
      </div>
    `);
  });

  it('should render <Loading />', async () => {
    const { container } = renderTheme(<BalanceCard loading />);

    expect(container).toMatchInlineSnapshot(`
      .c2:before,
      .c2:after {
        border: 0.5rem solid transparent;
        border-radius: 50%;
        content: '';
        left: 50%;
        position: absolute;
        top: 50%;
        -webkit-translate: [-50%,-50%];
        translate: [-50%,-50%];
      }

      .c2:after {
        -webkit-animation: keBzNL 600ms linear infinite;
        animation: keBzNL 600ms linear infinite;
        border-left: 0.5rem solid #dc143c;
        border-top: 0.5rem solid #dc143c;
        height: 3rem;
        width: 3rem;
      }

      .c2:before {
        -webkit-animation: keBzNL 1s linear reverse infinite;
        animation: keBzNL 1s linear reverse infinite;
        height: 0.5rem;
        border-left: 0.5rem solid #dc143c;
        border-top: 0.5rem solid #dc143c;
        width: 0.5rem;
      }

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
          <div
            class="c2"
          />
        </section>
      </div>
    `);
  });
});
