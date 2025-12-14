// pages/_app.js
import Layout from '../components/layout';
import '../styles/globals.css'; // Global styles
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
