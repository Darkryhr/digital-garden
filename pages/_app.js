import Layout from '../components/styled/layout';
import Theme from '../components/styled/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}

export default MyApp;
