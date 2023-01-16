import renderTheme from '../../../styles/renderTheme';
import Table from '..';
import { screen } from '@testing-library/react';

describe('<Table />', () => {
  it('should render <Table />', () => {
    renderTheme(
      <Table
        data={[
          {
            id: 'id',
            date: '06/01/2023 11:03:28',
            type: 'cash-in',
            username: 'username',
            value: '50,00',
          },
        ]}
      />,
    );

    const table = screen.getByRole('table');

    expect(table).toMatchInlineSnapshot(`
      .c0 {
        border: 1px solid #000000;
        border-radius: 4px;
        box-shadow: #DDDDDD 3px 3px 0 0,#000000 3px 3px 0 1px;
        box-sizing: border-box;
        border-collapse: collapse;
        font-size: 1.6rem;
        width: 100%;
      }

      .c0 * {
        padding: 1rem;
        border: 1px solid #FFFFFF;
        text-align: center;
      }

      <table
        class="c0"
      >
        <thead>
          <tr>
            <th>
              De/para
            </th>
            <th>
              Valor (R$)
            </th>
            <th>
              Tipo
            </th>
            <th>
              Data
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              username
            </td>
            <td>
              50,00
            </td>
            <td>
              cash-in
            </td>
            <td>
              06/01/2023 11:03:28
            </td>
          </tr>
        </tbody>
      </table>
    `);
  });

  it('should render <Loading />', () => {
    const { container } = renderTheme(<Table data={[]} loading />);

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
