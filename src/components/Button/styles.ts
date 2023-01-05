import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    border: 1px solid ${theme.colors.black};
    border-radius: 4px;
    box-shadow: ${theme.colors.mediumGray} 3px 3px 0 0,
      ${theme.colors.black} 3px 3px 0 1px;
    box-sizing: border-box;
    color: ${theme.colors.mediumGray};
    cursor: pointer;
    display: inline-block;
    line-height: 20px;
    overflow: visible;
    padding: 6px 24px;
    touch-action: manipulation;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;

    :disabled {
      pointer-events: none;
    }

    :focus {
      text-decoration: none;
    }

    :hover {
      text-decoration: none;
    }

    :not([disabled]):active {
      background: ${theme.colors.mediumGray};
      outline: 0;
      transition: none;
      box-shadow: ${theme.colors.mediumGray} 2px 2px 0 0,
        ${theme.colors.black} 2px 2px 0 1px;
      translate: 2px, 2px;
    }

    :has(svg) {
      padding: 0.5% 0.7%;
    }

    > svg {
      height: ${theme.spacings.small};
      width: ${theme.spacings.small};
    }
  `}
`;
