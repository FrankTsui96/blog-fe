import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 建议配置：数据在 5 分钟内被认为是“新鲜”的，不会自动触发后端请求
      staleTime: 1000 * 60 * 5,
      // 接口报错时自动重试 1 次
      retry: 1,
      // 当窗口重新获得焦点时是否重新请求（个人博客建议关掉，后台建议开启）
      refetchOnWindowFocus: false,
    },
  },
});
