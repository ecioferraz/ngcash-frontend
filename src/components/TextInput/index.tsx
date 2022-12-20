import * as Styled from './styles';
import TextInputProps from './TextInputProps';

export default function TextInput({
  handleChange,
  minLength,
  placeholder,
  type = 'text',
  value,
}: TextInputProps) {
  return (
    <Styled.Container
      minLength={minLength}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
}
