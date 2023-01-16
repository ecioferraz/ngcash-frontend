import styled, { css, keyframes } from 'styled-components';

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    &:before,
    &:after {
      border: 0.5rem solid transparent;
      border-radius: 50%;
      content: '';
      left: 50%;
      position: absolute;
      top: 50%;
      translate: [-50%, -50%];
    }

    &:after {
      animation: ${rotate()} 600ms linear infinite;
      border-left: 0.5rem solid ${theme.colors.secondaryColor};
      border-top: 0.5rem solid ${theme.colors.secondaryColor};
      height: 3rem;
      width: 3rem;
    }

    &:before {
      animation: ${rotate()} 1s linear reverse infinite;
      height: 0.5rem;
      border-left: 0.5rem solid ${theme.colors.secondaryColor};
      border-top: 0.5rem solid ${theme.colors.secondaryColor};
      width: 0.5rem;
    }
  `}
`;
