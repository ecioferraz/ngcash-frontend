import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    align-items: center;
    backdrop-filter: blur(2px);
    background: ${theme.colors.white};
    box-shadow: ${theme.colors.secondaryColor} 0 1px 10px;
    display: flex;
    justify-content: space-between;
    height: 6rem;
    padding: 0 3vw;
    width: 100%;
    -webkit-backdrop-filter: blur(6px);

    > a {
      align-items: center;
      color: ${theme.colors.black};
      display: flex;
      justify-content: center;
      height: 100%;
      padding: 1rem;
      text-decoration: none;
      transition: 0.5s;
      width: fit-content;
    }

    > a:hover {
      background: ${theme.colors.secondaryColor};
      border-radius: 0 0 1px 1px;
      box-shadow: 0 1px 1px;
      color: ${theme.colors.white};
      opacity: 0.7;
      transition: 0.5s;
    }

    > img {
      width: 4.5rem;
    }
  `}
`;
