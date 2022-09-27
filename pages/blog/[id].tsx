import { GetServerSideProps , GetStaticProps} from 'next';
import Link from 'next/link';


import type { Blog } from '../../types/blog';
import { client } from '../../libs/client';
import { useRouter } from "next/router";

import Header from '../../components/Header'
import { JSDOM } from 'jsdom'


const PER_PAGE = 5; 

type Props = {
  blog: Blog;
  totalCount: number;
  toc: Array<Toc>;
};

type Toc = {
  text: string | null
  id: string
  name: string
}


//microcmsのhtml展開

export default function BlogPageId({ blog,toc }:Props) {
  const router = useRouter();
  return (
    <div className="bg-gray-50">
      <Header title={blog.title} 
        description='DAAAAA' 
        icon='/zu3.png' 
        url={router.asPath} 
        image={blog.eye_catch.url} 
        twittercard=''
      ></Header>
      <div className="sidebar border-solid border-3 border-indigo-600 max-w-xl px-7 py-10 bg-gray-50">
        <div className=''>
          {toc.map((item, index) => (
            <div key={`${item.id}-${index}`}>
              <Link href={`#${item.id}`}><a className={`${item.name}`} >{item.text}</a></Link>
            </div>
          ))}
        </div>
      </div>
      <div className="px-1 py-6 mx-auto ">
        <div className="max-w-4xl px-7 py-10 mx-auto bg-gray-50 relative z-2">
          <img
            className="object-cover w-full shadow-sm h-full"
            src={blog.eye_catch.url}
          />
          <div className="mt-2">
            <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500">
              {blog.title}
            </div>
          </div>
          <div className="px-3 pt-2 pb-1 text-sm relative">
            作成日時 {blog.createdAt}<br/>
            最終更新 {blog.updatedAt}
          </div>
          {blog.category &&
            <div className="px-6 pt-4 pb-2 relative">
              <a>カテゴリー</a><br/>
                <Link href={`/${blog.category.id}/page/1`} passHref>
                  <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {blog.category.name}
                  </a>
                </Link>
            </div>
          }
          <div className="px-6 pt-4 pb-2 relative">
            <a>タグ</a><br/>
            {blog.tags && blog.tags.map( blog => (
              <Link href={`/tags/tag/${blog.id}/page/1`} passHref>
                <div className="flex items-center justify-start mt-4 mb-4">
                  <div className="px-3 py-1 font-bold bg-red-400 text-white rounded-lg">
                    #{blog.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-2">
            <div className="text-lg text-gray-700 mt-4 rounded ">
              <div
                dangerouslySetInnerHTML={{
                  __html: `${blog.body}`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'blog',
    contentId: idExceptArray,
  });

  const dom = new JSDOM(data.body)
  const toc: Toc[] = []
  dom.window.document
    .querySelectorAll('h1, h2, h3, h4, h5, h6')
    .forEach((heading) => {
      //console.log(heading)
      toc.push({
        id: heading.id,
        name: heading.tagName,
        text: heading.textContent,
      })
    })
  //console.log(toc)

  return {
    props: {
      blog: data,
      toc: toc
    },
  };
};