
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head'
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <link rel="stylesheet" href="index.css"/>
      </Head>
      <Header></Header>
      <div id="ba">
        <div id="bg"></div>
        <canvas id="canvasOverlay"></canvas>
        <Component {...pageProps} />
        <iframe className="disgetbot" src="https://discord.com/widget?id=838937935822585928&theme=dark" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
    </>
  );
}

export default MyApp;
