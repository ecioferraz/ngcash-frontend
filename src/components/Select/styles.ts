import styled, { css } from 'styled-components';

export const Container = styled.select`
  ${({ theme }) => css`
    background: transparent;
    border: none;
    border-bottom: solid 1px ${theme.colors.mediumGray};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    outline: none;
    width: 10rem;

    :focus {
      border: none;
      border-bottom: 1px solid ${theme.colors.lightGreen};
      outline: none;
    }

    > option {
      background: ${theme.colors.black};
      font-size: ${theme.font.sizes.small};
      height: ${theme.spacings.xsmall};
    }
  `}
`;
