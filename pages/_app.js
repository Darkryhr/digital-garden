import React, { useState, useEffect } from 'react';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/styled/theme';
import { GlobalStyles } from '@components/styled/globalStyles';
import Layout from '../components/styled/layout';
import Theme from '../components/styled/theme';
import SEO from '@components/SEO';

function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <SEO />
      <GlobalStyles />
      <Layout toggleTheme={toggleTheme}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
