import renderTheme from '../../../styles/renderTheme';
import Header from '..';

describe('<Header />', () => {
  it('should render <Header />', () => {
    const { container } = renderTheme(<Header />);

    expect(container).toMatchInlineSnapshot(`
      .c1 {
        font-size: 1.6rem;
        text-transform: none;
      }

      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-backdrop-filter: blur(2px);
        backdrop-filter: blur(2px);
        background: #FFFFFF;
        box-shadow: #dc143c 0 1px 10px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        height: 6rem;
        padding: 0 3vw;
        width: 100%;
        -webkit-backdrop-filter: blur(6px);
      }

      .c0 > a {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #000000;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 100%;
        padding: 1rem;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
      }

      .c0 > a:hover {
        background: #dc143c;
        border-radius: 0 0 1px 1px;
        box-shadow: 0 1px 1px;
        color: #FFFFFF;
        opacity: 0.7;
        -webkit-transition: 0.5s;
        transition: 0.5s;
      }

      .c0 > img {
        width: 4.5rem;
      }

      <div>
        <header
          class="c0"
        >
          <img
            alt="Logo da NG.CASH"
            class=""
            src="../../assets/images/ngcash-logo-small.png"
          />
          <a
            href="/login"
          >
            <p
              class="c1"
            >
              Logout
            </p>
          </a>
        </header>
      </div>
    `);
  });
});
