export type PageQuery = {
  pageIndex: number;
  perPage: number;
};

export type PageInfo = PageQuery & {
  currentPage: number;
  hasNextPage: number;
  lastPage: number;
  pageIndex: number;
  perPage: number;
  total: number;
};
