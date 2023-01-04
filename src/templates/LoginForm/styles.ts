import styled, { css } from 'styled-components';

export const Container = styled.form`
  ${({ theme }) => css`
    align-items: center;
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-backdrop-filter: blur(6px);
    padding: 1em 2em;
    width: fit-content;

    > h1 {
      text-align: center;
      width: 100%;
    }

    > * {
      display: flex;
      flex-direction: column;
      margin: 1rem;
    }

    input {
      background: transparent;
      border: none;
      border-bottom: solid 1px ${theme.colors.mediumGray};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      outline: none;
    }

    input:focus {
      border: none;
      border-bottom: 1px solid ${theme.colors.lightGreen};
      outline: none;
    }

    section > * {
      margin: 0.3rem
    }

    button {
      background: ${theme.colors.black};
      border: 1px solid ${theme.colors.black};
      border-radius: 4px;
      box-shadow: ${theme.colors.mediumGray} 3px 3px 0 0,${theme.colors.black} 3px 3px 0 1px;
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
    }

    button:disabled {
      pointer-events: none;
    }

    button:focus {
      text-decoration: none;
    }

    button:hover {
      text-decoration: none;
    }

    button:active {
      background: ${theme.colors.lightGreen};
      box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
      outline: 0;
      transition: none;
    }

    button:not([disabled]):active {
      box-shadow: ${theme.colors.mediumGray} 2px 2px 0 0, ${theme.colors.black} 2px 2px 0 1px;
      translate: 2px, 2px;

    }

    @media (min-width: 768px) {
      button {
        padding: 12px 50px;
      }
    }
  `}
`;
