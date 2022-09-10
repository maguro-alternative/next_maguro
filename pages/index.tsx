import { client } from '../libs/client';
import type { Blog } from '../types/blog';
import Link from 'next/link';
import Part from '../components/part'

type Props = {
  blog: Array<Blog>;
  totalCount: number;
};

export default function Home({ blog,totalCount }: Props) {
  return (
    <>
      <h1 className="container mx-auto px-10 pt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 relative z-2">
        記事一覧
      </h1>
      <div className="container mx-auto p-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 relative z-2">
        {blog.map(article => (
          <div className="wrapper" key={article.id}>
            <div className="mainbar">
              <div className="textback">
                <div className="rounded overflow-hidden shadow-lg relative z-2">
                  <img
                    className="w-full relative"
                    src={article.eye_catch.url}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4 relative">
                    <Link href={`/blog/${article.id}`} passHref>
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center relative'>
        <Part totalCount={totalCount} />
      </div>
    </>
  );
}    
export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'blog' ,queries: { limit: 20, offset: 0, limit: 5 } });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount
    },
  };
};
