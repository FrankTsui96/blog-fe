/** 分页数据 */
export interface PaginatedResponse<T> {
  records: T[];
  total: number;
  page: number;
  pageSize: number;
}
