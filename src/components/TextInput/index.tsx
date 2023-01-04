import * as Styled from './styles';
import TextInputProps from './TextInputProps';

export default function TextInput({
  datalist,
  handleChange,
  minLength,
  placeholder,
  type = 'text',
  value,
}: TextInputProps) {
  return (
    <>
      <Styled.Container
        list={datalist && 'usernames'}
        minLength={minLength}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        value={value}
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
