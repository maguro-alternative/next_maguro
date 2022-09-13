import { client } from '../libs/client';
import type { Blog } from '../types/blog';
import type { Category } from '../types/category';
import type { Tag } from '../types/tag';
import { useRouter } from "next/router";
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
      <Header title='Devil May Cry' 
        description='DAAAAA' 
        icon='' 
        url='' 
        image='' 
        twittercard=''
      ></Header>
      <h1 className="container mx-auto text-white px-10 pt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 relative z-2">
        記事一覧
      </h1>
      <ul>
        {tag.map((tag) => (
          <li className='text-white relative z-2' key={tag.id}>
            <Link href={`/tags/tag/${tag.id}/page/1`}>
              <a>{tag.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        {category.map((category) => (
          <li className='text-white relative z-2' key={category.id}>
            <Link href={`/${category.id}/page/1`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
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
