// pages/_app.tsx
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css'; // Import global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
