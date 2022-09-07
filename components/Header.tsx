import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-gray-600 body-font bg-blue-500 z-2">
      <meta name="viewport" content="width=640" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      <link rel="stylesheet" href="index.css"/>
      <script defer src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.min.js"></script>
      <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossOrigin="anonymous"></script>
      <script defer src="sls.js"></script>
      <script defer src="ws.js"></script>
      <script defer src="4saw.js"></script>
      <div className="container">
        <header>
          <nav className="global-nav">
            <ul className="nav-list">
              <li className="nav-item"><a href="#">トップ</a></li>
              <li className="nav-item"><a href="#">記事一覧</a></li>
              <li className="nav-item"><a href="#">メンバー紹介</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </header>
  );
}
