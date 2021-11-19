import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

import Layout from '../components/styled/layout';
import Theme from '../components/styled/theme';
import SEO from '@components/SEO';

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <SEO />
      <Layout>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </Theme>
  );
}

export default MyApp;
