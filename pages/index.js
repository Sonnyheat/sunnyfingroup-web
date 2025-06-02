// pages/index.js – Sunny Financial Group Homepage

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunny Financial Group</title>
        <meta name="description" content="Only What’s Best for You – Always" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        <h1>Welcome to Sunny Financial Group</h1>
        <p>Only What’s Best for You – Always</p>
      </main>
    </>
  );
}