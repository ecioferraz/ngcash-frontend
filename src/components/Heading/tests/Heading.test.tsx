import renderTheme from '../../../styles/renderTheme';
import Heading from '..';
import { screen } from '@testing-library/react';

describe('<Heading />', () => {
  it('should render <Heading />', () => {
    renderTheme(<Heading>Children</Heading>);

    const heading = screen.getByRole('heading', { name: 'Children' });

    expect(heading).toBeInTheDocument();
  });
});
