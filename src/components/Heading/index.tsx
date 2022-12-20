import HeadingProps from './HeadingProps';
import * as Styled from './styles';

export default function Heading({ children }: HeadingProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
