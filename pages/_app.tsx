import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <div id="ba">
        <div id="bg"></div>
       <canvas id="canvasOverlay"></canvas>
       <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
