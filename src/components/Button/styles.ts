import styled, { css } from 'styled-components';
import ButtonProps from './ButtonProps';

export const Container = styled.button<ButtonProps>`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryColor};
  `}
`;
