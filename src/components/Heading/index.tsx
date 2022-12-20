import HeadingProps from './HeadingProps';
import * as Styled from './styles';

export default function Heading({
  as = 'h1',
  children,
  size = 'huge',
  uppercase = false,
}: HeadingProps) {
  return (
    <Styled.Container as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.Container>
  );
}
