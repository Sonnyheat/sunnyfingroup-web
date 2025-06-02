// pages/_app.js – Global wrapper for Sunny Financial Next.js app

import '../styles/style.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}