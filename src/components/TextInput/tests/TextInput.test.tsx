import renderTheme from '../../../styles/renderTheme';
import TextInput from '..';
import { screen } from '@testing-library/react';

describe('<TextInput />', () => {
  const onChange = jest.fn();

  it('should render <TextInput />', () => {
    renderTheme(<TextInput handleChange={onChange} placeholder="TextInput" />);

    const textInput = screen.getByPlaceholderText('TextInput');

    expect(textInput).toBeInTheDocument();
  });
});
