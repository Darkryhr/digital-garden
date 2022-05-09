import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import useDarkMode from '@components/useDarkMode';
import { lightTheme, darkTheme } from '../components/styled/theme';
import '../styles/globals.css';
import { GlobalStyles } from '@components/styled/globalStyles';
import Layout from '../components/styled/layout';
import SEO from '@components/SEO';
import { Toaster } from 'react-hot-toast';
import Loader from '@components/Loader';

function App({ Component, pageProps, router }) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <SEO />
      <GlobalStyles />
      <Layout toggleTheme={themeToggler}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <motion.div
            style={{ width: '100%' }}
            key={router.route}
            initial='pageInitial'
            animate='pageAnimate'
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
          >
            {pageLoading ? <Loader /> : <Component {...pageProps} />}
          </motion.div>
          <Toaster position='bottom-center' reverseOrder={false} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
