import { client } from '../libs/client';
import type { Article } from '../types/article';
import Link from 'next/link';

type Props = {
  articles: Array<Article>;
};

export default function Home({ articles }: Props) {
  return (
    <>
      <h1 className="container mx-auto px-10 pt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 relative z-2">
        記事一覧
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 relative z-2">
        {articles.map(article => (
          <div className="rounded overflow-hidden shadow-lg relative z-2" key={article.id}>
            <img
              className="w-full relative"
              src={article.eye_catch.url}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 relative">
              <Link href={`/article/${article.id}`} passHref>
                <a>{article.title}</a>
              </Link>
            </div>
            <div className="px-6 pt-4 pb-2 relative">
              {article.tag && (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{article.tag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'articles' });

  return {
    props: {
      articles: data.contents,
    },
  };
};
