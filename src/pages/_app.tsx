import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';
import { theme } from '../styles/theme';
import '../../public/fonts/styles.css';
import AccountProvider from '../providers/AccountProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AccountProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AccountProvider>
  );
}
