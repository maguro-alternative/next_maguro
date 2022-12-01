import { client } from '../libs/client';
import type { Blog } from '../types/blog';
import type { Category } from '../types/category';
import type { Tag } from '../types/tag';
import Link from 'next/link';
import Image from 'next/image'
import Part from '../components/part'
import Header from '../components/Header'

import Dayjs from 'dayjs'

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
        最新記事
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
                  <div className="sm:px-0 sm:py-1 sm:pb-1 text-1 xl:px-3 xl:pt-2 xl:pb-1 text-sm relative">
                    作成日時 {Dayjs(new Date(article.createdAt)).format('YYYY-MM-DD')}<br/>
                    最終更新 {Dayjs(new Date(article.updatedAt)).format('YYYY-MM-DD')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
}    
export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'blog' ,queries: {  offset: 0, limit: 3 } });
  //const categoryData = await client.get({ endpoint: "category" });
  //const tagData = await client.get({ endpoint: "tag" });

  //console.log(tagData)
  //console.log(data.contents[0].tags[0].name)

  return {
    props: {
      blog: data.contents,
      //category: categoryData.contents,
      totalCount: data.totalCount,
      //tag: tagData.contents
    },
    //category: categoryData.contents,
  };
};
