import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import 'normalize.css';

import { useDarkMode } from 'hooks/useDarkMode';
import { lightTheme, darkTheme } from '@styled/theme.css';
import { GlobalStyles } from '@styled/global.css';
import Layout from '@components/Layout';
import Loader from '@components/Loader';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@components/mdx';

function App({ Component, pageProps, router }: AppProps) {
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
      <MDXProvider components={MDXComponents}>
        <GlobalStyles />
        <Layout toggleTheme={themeToggler}>
          {/* 
  // @ts-ignore */}
          <AnimatePresence exitBeforeEnter={true} initial={false}>
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
          </AnimatePresence>
          <Toaster position='bottom-center' reverseOrder={false} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default App;
