import renderTheme from '../../../styles/renderTheme';
import LoginForm from '..';

describe('<LoginForm />', () => {
  it('should render <LoginForm />', () => {
    const { container } = renderTheme(<LoginForm />);

    expect(container).toMatchInlineSnapshot(`
      .c2 {
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

      .c2:disabled {
        pointer-events: none;
      }

      .c2:focus {
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c2:hover {
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c2:not([disabled]):active {
        background: #DDDDDD;
        outline: 0;
        -webkit-transition: none;
        transition: none;
        box-shadow: #DDDDDD 2px 2px 0 0,#000000 2px 2px 0 1px;
        -webkit-translate: 2px,2px;
        translate: 2px,2px;
      }

      .c2:has(svg) {
        padding: 0.5% 0.7%;
      }

      .c2 > svg {
        height: 1.6rem;
        width: 1.6rem;
      }

      .c0 {
        font-size: 3.2rem;
        text-transform: none;
      }

      .c1 {
        background: transparent;
        border: none;
        border-bottom: solid 1px #DDDDDD;
        color: #FFFFFF;
        font-size: 1.6rem;
        outline: none;
      }

      .c1:focus {
        border: none;
        border-bottom: 1px solid #00D775;
        outline: none;
      }

      <div>
        <form
          class=""
        >
          <h1
            class="c0"
          >
            Bem-vindo(a)!
          </h1>
          <section>
            <input
              class="c1"
              placeholder="Username"
              type="text"
              value=""
            />
            <input
              class="c1"
              minlength="8"
              placeholder="Password"
              type="password"
              value=""
            />
          </section>
          <section>
            <button
              class="c2"
              disabled=""
              type="submit"
            >
              Login
            </button>
            <button
              class="c2"
              disabled=""
              type="submit"
            >
              Register
            </button>
          </section>
        </form>
      </div>
    `);
  });
});
