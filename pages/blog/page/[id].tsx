import Link from 'next/link';
import { useRouter } from "next/router";
import type { Blog } from '../../../types/blog';
import { client } from '../../../libs/client';
import { Pagination } from '../../../components/part';
import Header from '../../../components/Header';


// 1ページごとに表示する記事の最大数
const PER_PAGE = 5; 

type Props = {
  blog: Array<Blog>;
  totalCount: number;
};
// blog/page/{number}
export default function BlogPageId({ blog, totalCount }:Props) {
  const router = useRouter(); 
  const titlename=`記事一覧 ${router.query.id}ページ目`
  return (
    <>
      <Header title={titlename} 
        description='DAAAAA' 
        icon='/zu3.png' 
        url={router.asPath} 
        image='/zu3.png' 
        twittercard=''
      ></Header>
      <div className="container mx-auto p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 relative z-2">
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
                    {article.tags && article.tags.map(article => (
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{article.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center relative'>
        <Pagination totalCount={totalCount} />
      </div>
    </>
  );
}

// 動的なページを作成
// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blog" });


  const pageNumbers = [];


  const range = (start:number, end:number) => [...Array(end - start + 1)].map((_, i) => start + i);


  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`);

  //console.log(paths)

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context:any) => {
  const id = context.params.id;

  const data = await client.get({ endpoint: "blog", queries: { offset: (id - 1) * 5, limit: 5 } });

  //console.log(data)
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  }
}
