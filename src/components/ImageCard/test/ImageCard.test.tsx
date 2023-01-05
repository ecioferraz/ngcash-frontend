import renderTheme from '../../../styles/renderTheme';
import ImageCard from '..';

describe('<ImageCard />', () => {
  it('should render <ImageCard />', () => {
    const { container } = renderTheme(
      <ImageCard altText="test" src="../../assets/images/ngcash-logo.jpg" />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <img
          alt="test"
          class=""
          src="../../assets/images/ngcash-logo.jpg"
        />
      </div>
    `);
  });
});
