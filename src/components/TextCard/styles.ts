import styled, { css, DefaultTheme } from 'styled-components';
import TextCardProps from './TextCardProps';

const textSize = {
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
    ${mediaFont(theme)};
  `,
  xhuge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
`,
};

const textCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

export const Container = styled.h1<Pick<TextCardProps, 'size' | 'uppercase'>>`
  ${({ size = 'huge', theme, uppercase = false }) => css`
    ${textSize[size](theme)};
    ${textCase(uppercase)};
  `}
`;
