import { useQuery } from '@tanstack/react-query';
import { articlesApi } from '@/api/articles';
import type { IGetArticles } from '@/api/articles';

export const useArticles = (params: IGetArticles) => {
  return useQuery({
    queryKey: ['articles', params], // 只要参数变了，自动重新拉取
    queryFn: () => articlesApi.getArticles(params),
  });
};
