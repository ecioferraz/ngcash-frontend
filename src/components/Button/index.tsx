import ButtonProps from './ButtonProps';
import * as Styled from './styles';

export default function Button({
  children,
  disabled = false,
  handleClick,
  type = 'button',
}: ButtonProps) {
  return (
    <Styled.Container disabled={disabled} onClick={handleClick} type={type}>
      {children}
    </Styled.Container>
  );
}
