import { render, RenderResult } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export default function renderTheme(children: ReactNode): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
