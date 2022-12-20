import renderTheme from '../../../styles/renderTheme';
import Button from '..';
import { screen } from '@testing-library/react';

describe('<Button />', () => {
  it('should render <Button />', () => {
    renderTheme(<Button>Button</Button>);

    const button = screen.getByRole('button', { name: 'Button' });

    expect(button).toBeInTheDocument();
  });
});
