import { MDXProvider } from '@mdx-js/react';
import { AnimatePresence, motion } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import 'normalize.css';
import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { SEOConfig } from '../next-seo.config';

import Layout from '@components/Layout';
import Loader from '@components/Loader';
import MDXComponents from '@components/mdx';
import SEO from '@components/SEO';
import * as gtag from '@lib/gtag';
import { GlobalStyles } from '@styled/global.css';
import { darkTheme, lightTheme } from '@styled/theme.css';
import { useDarkMode } from 'hooks/useDarkMode';

function App({ Component, pageProps, router }: AppProps) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [pageLoading, setPageLoading] = useState(false);

  //* for page loading
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
  }, [router.events]);

  //* for analytics
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (!mountedComponent) return <div />;

  return (
    //     <Script
    //       strategy='afterInteractive'
    //       src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
    //     />
    //     <Script
    //       id='gtag-init'
    //       strategy='afterInteractive'
    //       dangerouslySetInnerHTML={{
    //         __html: `
    //           window.dataLayer = window.dataLayer || [];
    //           function gtag(){dataLayer.push(arguments);}
    //           gtag('js', new Date());
    //           gtag('config', '${gtag.GA_TRACKING_ID}', {
    //             page_path: window.location.pathname,
    //           });
    //         `,
    //       }}
    //     />
    //     <MDXProvider components={MDXComponents}>
    //       <GlobalStyles />
    //       <Layout toggleTheme={themeToggler}>
    //         <DefaultSeo {...SEOConfig} />
    //         {/*
    // // @ts-ignore */}
    //         <AnimatePresence exitBeforeEnter={true} initial={false}>
    //           <motion.div
    //             style={{ width: '100%' }}
    //             key={router.route}
    //             initial='pageInitial'
    //             animate='pageAnimate'
    //             variants={{
    //               pageInitial: {
    //                 opacity: 0,
    //               },
    //               pageAnimate: {
    //                 opacity: 1,
    //               },
    //             }}
    //           >
    //             {pageLoading ? (
    //               <Loader />
    //             ) : (
    //               <>
    //               </>
    //             )}
    //           </motion.div>
    //         </AnimatePresence>
    //         <Toaster position='bottom-center' reverseOrder={false} />
    //       </Layout>
    //     </MDXProvider>

    <ThemeProvider theme={themeMode}>
      <SEO />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
