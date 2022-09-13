import Link from 'next/link';

type count = {
  totalCount:number,
  tagid:string
}
//ページネーションの追加
export const Pagination = ({ totalCount,tagid }:count) => {
  const PER_PAGE = 5;

  const range = (start:number, end:number) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <div className="wrapper">
      <div className="mainbar">
        <div className="textback">
          <ul>
            {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
              <li className='inline-block relative m-2' key={index}>
                <Link  href={ `/tags/tag/${tagid}/page/${number}`}>
                  <a className='text-2xl'>{number}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Pagination;