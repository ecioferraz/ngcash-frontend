import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family.default};
    margin: 0;
    padding: 0;
    transition: 0.8s;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }

  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5% 10%;
  }

  main > * {
    margin: 1rem
  }

  main:has(img) {
    height: 80vh;
  }

  form {
    align-items: center;
    backdrop-filter: blur(2px);
    background: rgba(255, 255, 255, 0.05);
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

    section > p {
      color: ${({ theme }) => theme.colors.secondaryColor};
      margin: ${({ theme }) => theme.spacings.xsmall} 0;
    }

  }

  section > * {
    margin: 0.3rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  .login-page {
    height: 100vh;
  }

  .account-page, .login-page {
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .account-page > * {
    margin: 0.8rem;
  }

  @media ${({ theme }) => theme.media.lteMedium} {
    .account-page, .login-page {
      flex-direction: column;
      justify-content: center;
    }

    img {
      width: 100%;
    }
  }
`;
