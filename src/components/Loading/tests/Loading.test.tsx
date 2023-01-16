import renderTheme from '../../../styles/renderTheme';
import Loading from '..';

describe('<Loading />', () => {
  it('should render <Loading />', () => {
    const { container } = renderTheme(<Loading />);

    expect(container).toMatchInlineSnapshot(`
      .c0:before,
      .c0:after {
        border: 0.5rem solid transparent;
        border-radius: 50%;
        content: '';
        left: 50%;
        position: absolute;
        top: 50%;
        -webkit-translate: [-50%,-50%];
        translate: [-50%,-50%];
      }

      .c0:after {
        -webkit-animation: keBzNL 600ms linear infinite;
        animation: keBzNL 600ms linear infinite;
        border-left: 0.5rem solid #dc143c;
        border-top: 0.5rem solid #dc143c;
        height: 3rem;
        width: 3rem;
      }

      .c0:before {
        -webkit-animation: keBzNL 1s linear reverse infinite;
        animation: keBzNL 1s linear reverse infinite;
        height: 0.5rem;
        border-left: 0.5rem solid #dc143c;
        border-top: 0.5rem solid #dc143c;
        width: 0.5rem;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
