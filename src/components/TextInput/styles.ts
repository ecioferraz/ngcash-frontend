import styled, { css } from 'styled-components';

export const Container = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: none;
    border-bottom: solid 1px ${theme.colors.mediumGray};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    outline: none;

    :focus {
      border: none;
      border-bottom: 1px solid ${theme.colors.lightGreen};
      outline: none;
    }
  `}
`;
