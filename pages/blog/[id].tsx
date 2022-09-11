import { GetServerSideProps , GetStaticProps} from 'next';

import type { Blog } from '../../types/blog';
import { client } from '../../libs/client';


const PER_PAGE = 5; 

type Props = {
  blog: Blog;
  totalCount: number;
};

//microcmsのhtml展開

export default function BlogPageId({ blog }:Props) {
  return (
    <div className="bg-gray-50">
      <div className="px-10 py-6 mx-auto ">
        <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50 relative z-2">
          <img
            className="object-cover w-full shadow-sm h-full"
            src={blog.eye_catch.url}
          />
          <div className="mt-2">
            <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500">
              {blog.title}
            </div>
          </div>
          {blog.tags && blog.tags.map( blog => (
            <div className="flex items-center justify-start mt-4 mb-4">
              <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                #{blog.name}
              </div>
            </div>
          ))}
          <div className="mt-2">
            <div className="text-2xl text-gray-700 mt-4 rounded ">
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

  return {
    props: {
      blog: data,
    },
  };
};