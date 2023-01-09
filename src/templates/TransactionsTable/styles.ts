import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css`
  text-align: center;
  width: 100%;

  > * {
    margin: 2rem 0;
  }

  > h1 {
    margin-bottom: 0;
    margin-top: 1rem;
  }

  > button {
    margin-top: 0;
  }

  @media ${theme.media.lteMedium} {
    width: fit-content;
  }
`}
`;

export const Filters = styled.section`
  align-items: center;
  display: flex;
  width: 100%;
`;

export const Order = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  > p {
    margin: 0;
  }
`;
