import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'hooks/useDarkMode';
import { lightTheme, darkTheme } from '@styled/theme.css';
import { GlobalStyles } from 'styled/global.css';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { Toaster } from 'react-hot-toast';
import Loader from '@components/Loader';
import 'normalize.css';
import { MDXProvider } from '@mdx-js/react';

import { Split, Split2 } from 'pages';
import MDXComponents from '@components/MDXComponents';

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
      <MDXProvider components={MDXComponents}>
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
      </MDXProvider>
    </ThemeProvider>
  );
}

export default App;
