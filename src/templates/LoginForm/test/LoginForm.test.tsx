import renderTheme from '../../../styles/renderTheme';
import LoginForm from '..';

describe('<LoginForm />', () => {
  it('should render <LoginForm />', () => {
    const { container } = renderTheme(<LoginForm />);

    expect(container).toMatchInlineSnapshot(`
      .c2 > svg {
        height: 1.6rem;
        width: 1.6rem;
      }

      .c0 {
        font-size: 5.6rem;
        text-transform: none;
      }

      .c1 {
        font-size: 0.8rem;
        text-transform: none;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 4.0rem;
        }
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
          <input
            class=""
            placeholder="Username"
            type="text"
            value=""
          />
          <input
            class=""
            placeholder="Password"
            type="text"
            value=""
          />
          <p
            class="c1"
          />
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
        </form>
      </div>
    `);
  });
});
