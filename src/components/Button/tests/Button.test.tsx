import renderTheme from '../../../styles/renderTheme';
import Button from '..';
import { screen } from '@testing-library/react';

describe('<Button />', () => {
  it('should render <Button />', () => {
    renderTheme(<Button>Button</Button>);

    const button = screen.getByRole('button', { name: 'Button' });

    expect(button).toMatchInlineSnapshot(`
      .c0 {
        background: #000000;
        border: 1px solid #000000;
        border-radius: 4px;
        box-shadow: #DDDDDD 3px 3px 0 0,#000000 3px 3px 0 1px;
        box-sizing: border-box;
        color: #DDDDDD;
        cursor: pointer;
        display: inline-block;
        line-height: 20px;
        overflow: visible;
        padding: 6px 24px;
        touch-action: manipulation;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-select: none;
        vertical-align: middle;
        white-space: nowrap;
      }

      .c0:disabled {
        pointer-events: none;
      }

      .c0:focus {
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0:hover {
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0:not([disabled]):active {
        background: #DDDDDD;
        outline: 0;
        -webkit-transition: none;
        transition: none;
        box-shadow: #DDDDDD 2px 2px 0 0,#000000 2px 2px 0 1px;
        -webkit-translate: 2px,2px;
        translate: 2px,2px;
      }

      .c0:has(svg) {
        padding: 0.5% 0.7%;
      }

      .c0 > svg {
        height: 1.6rem;
        width: 1.6rem;
      }

      <button
        class="c0"
        type="button"
      >
        Button
      </button>
    `);
  });
});
