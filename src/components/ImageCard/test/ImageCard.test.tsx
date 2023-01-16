import renderTheme from '../../../styles/renderTheme';
import ImageCard from '..';
import { screen } from '@testing-library/react';

describe('<ImageCard />', () => {
  it('should render <ImageCard />', () => {
    renderTheme(
      <ImageCard altText="test" src="../../assets/images/ngcash-logo.jpg" />,
    );

    const imageCard = screen.getByRole('img', { name: 'test' });

    expect(imageCard).toMatchInlineSnapshot(`
      <img
        alt="test"
        class=""
        src="../../assets/images/ngcash-logo.jpg"
      />
    `);
  });
});
