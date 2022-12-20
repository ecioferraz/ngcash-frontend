import ButtonProps from './ButtonProps';
import * as Styled from './styles';

export default function Button({ children }: ButtonProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
