import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    padding: 10%;
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
      color: ${({ theme }) => theme.colors.secondaryColor}
    }

    section > * {
      margin: 0.3rem
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.secondary};
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
