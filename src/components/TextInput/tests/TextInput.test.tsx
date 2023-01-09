import renderTheme from '../../../styles/renderTheme';
import TextInput from '..';
import { screen } from '@testing-library/react';

describe('<TextInput />', () => {
  const onChange = jest.fn();

  it('should render <TextInput />', () => {
    renderTheme(
      <TextInput
        datalist={['user1', 'user2']}
        handleChange={onChange}
        minLength={8}
        placeholder="TextInput"
        value=""
      />,
    );

    const textInput = screen.getByPlaceholderText('TextInput');

    expect(textInput).toMatchInlineSnapshot(`
      .c0 {
        background: transparent;
        border: none;
        border-bottom: solid 1px #DDDDDD;
        color: #FFFFFF;
        font-size: 1.6rem;
        outline: none;
      }

      .c0:focus {
        border: none;
        border-bottom: 1px solid #00D775;
        outline: none;
      }

      <input
        class="c0"
        list="usernames"
        minlength="8"
        placeholder="TextInput"
        type="text"
        value=""
      />
    `);
  });
});
