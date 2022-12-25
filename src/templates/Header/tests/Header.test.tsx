import renderTheme from '../../../styles/renderTheme';
import Header from '..';

describe('<Header />', () => {
  it('should render <Header />', () => {
    const { container } = renderTheme(<Header />);

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
        <header
          class=""
        >
          <h1
            class="c0"
          >
            NG.CASH
          </h1>
          <a
            href="/login"
          />
        </header>
      </div>
    `);
  });
});
