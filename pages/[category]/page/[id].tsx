// pages/category/[id].js
import Link from "next/link";
import { useRouter } from "next/router";
import { client } from "../../../libs/client";
import type { Blog } from '../../../types/blog';
import type { Category } from '../../../types/category'
import { Pagination } from '../../../components/catepart';
import Header from '../../../components/Header'

//const router = useRouter(); 
//console.log(router)
// 1ページごとに表示する記事の最大数
const PER_PAGE = 5; 

type Props = {
    blog: Array<Blog>;
    totalCount: number;
    name: string;
    //category: Array<Category>
  };
  

export default function CategoryId({ blog,totalCount,name }:Props) {
  const router = useRouter(); 
  // カテゴリーに紐付いたコンテンツがない場合に表示
  //console.log(router.query.id)
  if (blog.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
  const titlename=`${name}のカテゴリー記事一覧 ${router.query.id}ページ目`
  return (
    <div>
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
        <Pagination totalCount={totalCount} categoryid={blog[0].category.id}/>
      </div>
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "category" });

  const paths: string[] = await Promise.all(
    data.contents.map((item: Category) => {
      const result = client
        .get({
          endpoint: 'blog',
          queries: {
            filters: `category[equals]${item.id}`,
          },
        })
        .then(({ totalCount }) => {
          const range = (start: number, end: number) =>
            [...Array(end - start + 1)].map((_, i) => start + i)

          return range(1, Math.ceil(totalCount / PER_PAGE)).map(
            (repo) => `/${item.id}/page/${repo}`
          )
        })
        //console.log(result)
      return result
    })
  )
  
  const p=paths.flat()

  //console.log(p)

  return { paths:p, fallback: false }

  
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context:any) => {
  const id = context.params.category;
  const catedata = await client.get({ endpoint: "category" });
  const data = await client.get({ endpoint: "blog", queries: { filters: `category[equals]${id}`, offset: (id - 1) * 5, limit: 5 } });

  let contentname
  for(const content of catedata.contents){
    //console.log(content.id)
    //console.log(id)
    if (content.id==id){
      contentname=content.name;
      break;
    }
  }

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      name: contentname,
    },
  };
};