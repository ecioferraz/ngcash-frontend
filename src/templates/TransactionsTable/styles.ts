import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css`
  text-align: center;
  width: 100%;

  > h1 {
    margin-bottom: 0;
  }

  @media ${theme.media.lteMedium} {
    width: fit-content;
  }
`}
`;

export const Filters = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const Order = styled.section`
  align-items: center;

  > p {
    margin: 0;
  }
`;
