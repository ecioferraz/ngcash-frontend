import renderTheme from '../../../styles/renderTheme';
import Table from '..';
import { screen } from '@testing-library/react';

describe('<Table />', () => {
  it('should render <Button />', () => {
    renderTheme(
      <Table
        data={[
          {
            date: new Date().toLocaleString(),
            type: 'Cash-in',
            username: 'username',
            value: '50,00',
          },
        ]}
      />,
    );

    const table = screen.getByRole('table');

    expect(table).toBeInTheDocument();
  });
});
