
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      </Head>
      <div id="ba">
        <div id="bg"></div>
        <canvas id="canvasOverlay"></canvas>
        <Component {...pageProps} />
        <iframe className="disgetbot max-w-4xl px-7 py-10 mx-auto" src="https://discord.com/widget?id=838937935822585928&theme=dark/" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
      <footer>
        <script defer src="//code.createjs.com/1.0.0/easeljs.min.js"></script>
        <script defer src="/sls.js"></script>
        <script defer src="/ws.js"></script>
        <script defer src="/4saw.js"></script>
        <link rel="stylesheet" href="/index.css"/>

        <script defer src="//cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.min.js"></script>
      </footer>
    </>
  );
}

export default MyApp;
