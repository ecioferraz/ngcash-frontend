import renderTheme from '../../../styles/renderTheme';
import Select from '..';
import { screen } from '@testing-library/react';

describe('<Select />', () => {
  const onChange = jest.fn();

  it('should render <Select />', () => {
    renderTheme(<Select handleChange={onChange} />);

    const select = screen.getByRole('option', { name: 'Todas' }).parentElement;

    expect(select).toBeInTheDocument();
    expect(select?.children.length).toBe(3);
  });
});
