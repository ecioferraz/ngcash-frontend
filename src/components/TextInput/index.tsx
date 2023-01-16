import * as Styled from './styles';
import TextInputProps from './TextInput.props';

export default function TextInput({
  datalist,
  handleChange,
  minLength,
  placeholder,
  value,
  type = 'text',
}: TextInputProps) {
  return (
    <>
      <Styled.Container
        list={datalist && 'usernames'}
        minLength={minLength}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        type={type}
      />
      {datalist && (
        <datalist id="usernames">
          {datalist.map((username) => (
            <option key={username} value={username} />
          ))}
        </datalist>
      )}
    </>
  );
}
