import Link from 'next/link';
import Head from 'next/head'
import { useRouter } from "next/router";

interface Props {
  title: string;
  description: string;
  icon: string;
  url: string;
  image: string;
  twittercard:string;
}

export default function Header({ title, description, icon, url, image, twittercard }: Props) {
  const router = useRouter();
  const asurl=`https://next-magurotaityouda.netlify.app${url}`
  return (
    <header className="body-font z-2">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={icon}></link>
        <meta property="og:url" content={asurl}></meta>
        <meta property="og:image" content={image} />
        <meta property="og:type" content=" website" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="自分のTwitterのユーザー名" />
      </Head>
      <script defer src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.min.js"></script>
      <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossOrigin="anonymous"></script>
      <script defer src="/sls.js"></script>
      <script defer src="/ws.js"></script>
      <script defer src="/4saw.js"></script>
      <div className="container">
        <header>
          <nav className="global-nav">
            <ul className="nav-list">
              <li className="nav-item"><a href='/'>トップ</a></li>
              <li className="nav-item"><a href="/blog/page/1">記事</a></li>
              <li className="nav-item"><a href="/catehead">カテゴリ</a></li>
              <li className="nav-item"><a href="/taghead">タグ</a></li>
              <li className="nav-item"><a href="/profile">自己紹介</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </header>
  );
}
