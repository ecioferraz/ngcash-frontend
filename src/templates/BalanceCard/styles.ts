import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    backdrop-filter: blur(2px);
    border-radius: 15px;
    background: ${theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    color: ${theme.colors.black};
    padding: 0.5rem;
    width: 30rem;

    > h6, p {
      margin: 1rem;
    }
  `}
`;
