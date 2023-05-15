import React from 'react';
import { PaginationContent, PaginationBtn } from '../mypage_style';

function Pagination({ totalPage, pageNum, setPage }: { totalPage: number; pageNum: number; setPage: any }) {
  const arr = Array(totalPage)
    .fill(1)
    .map((x, y) => x + y);
  return (
    <PaginationContent>
      {arr.map((value, idx) => (
        <PaginationBtn key={value} type="button" onClick={() => setPage(idx + 1)}>
          {idx + 1}
        </PaginationBtn>
      ))}
    </PaginationContent>
  );
}

export default Pagination;
