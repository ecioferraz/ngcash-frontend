import { screen } from '@storybook/testing-library';
import renderTheme from '../../../styles/renderTheme';
import Heading from '..';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>text</Heading>);

    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toBeInTheDocument();
  });
});
