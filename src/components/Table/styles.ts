import styled, { css } from 'styled-components';

export const Container = styled.table`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.black};
    border-radius: 4px;
    box-shadow: ${theme.colors.mediumGray} 3px 3px 0 0,
      ${theme.colors.black} 3px 3px 0 1px;
    box-sizing: border-box;
    border-collapse: collapse;
    font-size: ${theme.font.sizes.small};
    width: 100%;

    * {
      padding: 1rem;
      border: 1px solid ${theme.colors.white};
      text-align: center;
    }
  `}
`;
