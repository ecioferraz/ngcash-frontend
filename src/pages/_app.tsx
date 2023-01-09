import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';
import { theme } from '../styles/theme';
import '../../public/fonts/styles.css';
import UpdateProvider from '../providers/UpdateProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UpdateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </UpdateProvider>
  );
}
