import { screen } from '@storybook/testing-library';
import renderTheme from '../../../styles/renderTheme';
import Heading from '..';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>text</Heading>);

    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render the correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">text</Heading>);

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render with uppercase characters', () => {
    renderTheme(<Heading uppercase>text</Heading>);

    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({ 'text-transform': 'uppercase' });
  });
});
