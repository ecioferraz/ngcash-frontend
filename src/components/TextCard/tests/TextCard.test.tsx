import { screen } from '@storybook/testing-library';
import renderTheme from '../../../styles/renderTheme';
import TextCard from '..';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

describe('<TextCard />', () => {
  it('should render with default values', () => {
    renderTheme(<TextCard>text</TextCard>);

    const textCard = screen.getByRole('heading', { name: 'text' });

    expect(textCard).toHaveStyle({
      'font-size': theme.font.sizes.huge,
      'text-transform': 'none',
    });
  });

  it('should render the correct heading sizes', () => {
    const { rerender } = renderTheme(<TextCard size="xsmall">text</TextCard>);

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.xsmall,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <TextCard size="small">text</TextCard>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.small,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <TextCard size="medium">text</TextCard>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <TextCard size="large">text</TextCard>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <TextCard size="xlarge">text</TextCard>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <TextCard size="huge">text</TextCard>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.huge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <TextCard size="xhuge">text</TextCard>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render with uppercase characters', () => {
    renderTheme(<TextCard uppercase>text</TextCard>);

    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({ 'text-transform': 'uppercase' });
  });

  it('should render successful transaction message', () => {
    renderTheme(
      <TextCard as="p" size="xsmall">
        Transação concluída!
      </TextCard>,
    );

    const paragraph = screen.getByText('Transação concluída!');

    expect(paragraph).toHaveStyle({
      color: theme.colors.lightGreen,
      'font-size': theme.font.sizes.xsmall,
    });
  });
});
