import { client } from '../libs/client';
import type { Blog } from '../types/blog';
import type { Category } from '../types/category';
import type { Tag } from '../types/tag';
import Link from 'next/link';
import Part from '../components/part'
import Header from '../components/Header'



//const router = useRouter(); 

type Props = {
  blog: Array<Blog>;
  totalCount: number;
  category:Array<Category>;
  tag:Array<Tag>;
};

export default function Home({ blog,totalCount,category,tag }: Props) {
  //console.log(tag.flat())
  //{tag.map((tag) => (console.log(tag)))}
  return (
    <>
      <Header title='マグロポートフォリオ用トップページ' 
        description='DAAAAA' 
        icon='/zu3.png' 
        url='/' 
        image='/zu3.png' 
        twittercard=''
      ></Header>
      <h1 className="text-1 px-5 pt-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 relative z-2 container mx-auto text-white xl:px-10 xl:pt-20 grid grid-cols-1">
        最新記事一覧
      </h1>
      <div className="sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 relative z-2 xl:container mx-auto p-1 grid grid-cols-1">
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
                  <div className="sm:px-2 sm:py-1 text-1 xl:px-6 xl:py-4 relative">
                    <Link href={`/blog/${article.id}`} passHref>
                      <a>{article.title}</a>
                    </Link>
                  </div>
                  {article.category &&
                    <div className="sm:px-0 sm:pt-0 text-1 xl:px-6 xl:pt-4 relative">
                      <a>カテゴリー</a><br/>
                      <Link href={`/${article.category.id}/page/1`} passHref>
                        <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          {article.category.name}
                        </a>
                      </Link>
                    </div>
                  }
                  <div className="sm:px-0 sm:pt-0 text-1 xl:px-6 xl:pt-4 relative">
                    <a>タグ</a><br/>
                    {article.tags && article.tags.map(article => (
                      <Link href={`/tags/tag/${article.id}/page/1`} passHref key="">
                        <a className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #{article.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="sm:px-0 sm:py-1 sm:pb-1 text-1 xl:px-3 xl:pt-2 xl:pb-1 text-sm relative">
                    作成日時 {article.createdAt}<br/>
                    最終更新 {article.updatedAt}
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
  const data = await client.get({ endpoint: 'blog' ,queries: {  offset: 0, limit: 5 } });
  const categoryData = await client.get({ endpoint: "category" });
  const tagData = await client.get({ endpoint: "tag" });

  //console.log(tagData)
  //console.log(data.contents[0].tags[0].name)

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
      totalCount: data.totalCount,
      tag: tagData.contents
    },
    //category: categoryData.contents,
  };
};
