import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    border-radius: 15px;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: 0.5rem;
    width: 80%;

    > h6, p {
      margin: 1rem;
    }
  `}
`;
