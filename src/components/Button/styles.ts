import styled, { css } from 'styled-components';
import ButtonProps from './ButtonProps';

export const Container = styled.button<ButtonProps>`
  ${({ theme }) => css`

    > svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  `}
`;
