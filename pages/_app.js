import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import useDarkMode from '@components/useDarkMode';
import { lightTheme, darkTheme } from '../components/styled/theme';
import '../styles/globals.css';
import { GlobalStyles } from '@components/styled/globalStyles';
import Layout from '../components/styled/layout';
import SEO from '@components/SEO';
import { Toaster } from 'react-hot-toast';

function App({ Component, pageProps }) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <SEO />
      <GlobalStyles />
      <Layout toggleTheme={themeToggler}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
          <Toaster position='bottom-center' reverseOrder={false} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
