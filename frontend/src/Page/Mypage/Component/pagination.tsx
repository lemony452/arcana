import React from 'react';
import { PaginationContent, PaginationBtn } from '../mypage_style';

function Pagination({ totalPage, pageNum, setPage }: { totalPage: number; pageNum: number; setPage: any }) {
  return (
    <PaginationContent>
      {Array(totalPage)
        .fill(0)
        .map((_, idx) => (
          <PaginationBtn type="button" onClick={() => setPage(idx + 1)}>
            {idx + 1}
          </PaginationBtn>
        ))}
    </PaginationContent>
  );
}

export default Pagination;
