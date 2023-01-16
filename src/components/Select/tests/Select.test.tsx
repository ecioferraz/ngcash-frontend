import renderTheme from '../../../styles/renderTheme';
import Select from '..';
import { screen } from '@testing-library/react';

describe('<Select />', () => {
  const onChange = jest.fn();

  it('should render <Select />', () => {
    renderTheme(<Select handleChange={onChange} />);

    const select = screen.getByRole('option', { name: 'Todas' }).parentElement;

    expect(select?.children.length).toBe(3);
    expect(select).toMatchInlineSnapshot(`
      .c0 {
        background: transparent;
        border: none;
        border-bottom: solid 1px #DDDDDD;
        color: #FFFFFF;
        font-size: 1.6rem;
        outline: none;
        width: 10rem;
      }

      .c0:focus {
        border: none;
        border-bottom: 1px solid #00D775;
        outline: none;
      }

      .c0 > option {
        background: #000000;
        font-size: 1.6rem;
        height: 0.8rem;
      }

      <select
        class="c0"
      >
        <option
          value="all"
        >
          Todas
        </option>
        <option
          value="cash-in"
        >
          Entradas
        </option>
        <option
          value="cash-out"
        >
          Saídas
        </option>
      </select>
    `);
  });
});
