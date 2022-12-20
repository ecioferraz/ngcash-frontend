import TextInputProps from './TextInputProps';
import * as Styled from './styles';

export default function TextInput({ children }: TextInputProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
