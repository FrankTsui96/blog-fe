import './App.css';

/** 路由 */
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
/** 主题 */
import { ThemeProvider } from './hooks/use-theme';
/** 全局 spin 状态 */
import { AnimatePresence } from 'motion/react';
import { useLoadingStore } from '@/store/useLoadingStore';
import { GlobalSpin } from '@/components/common/GlobalSpin';
/** 全局提示框 */
import { Toaster } from '@/components/ui/sonner';
/** queryClient */
import { queryClient } from '@/lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const { isLoading } = useLoadingStore();

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <Toaster />
      </ThemeProvider>
      <AnimatePresence>{isLoading && <GlobalSpin />}</AnimatePresence>
    </>
  );
}

export default App;
