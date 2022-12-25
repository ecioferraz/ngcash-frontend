import renderTheme from '../../../styles/renderTheme';
import LoginForm from '..';

describe('<LoginForm />', () => {
  it('should render <LoginForm />', () => {
    const { container } = renderTheme(<LoginForm />);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-size: 6.4rem;
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
          <h6
            class="c0"
          />
          <button
            class=""
            disabled=""
            type="submit"
          >
            Login
          </button>
          <button
            class=""
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
