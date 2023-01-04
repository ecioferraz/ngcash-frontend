import renderTheme from '../../../styles/renderTheme';
import ImageCard from '..';

describe('<ImageCard />', () => {
  it('should render <ImageCard />', () => {
    const { container } = renderTheme(
      <ImageCard altText="test" src="../../assets/images/ngcash-logo.jpg" />,
    );

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
      }

      <div>
        <img
          alt="test"
          class="c0"
          src="../../assets/images/ngcash-logo.jpg"
        />
      </div>
    `);
  });
});
