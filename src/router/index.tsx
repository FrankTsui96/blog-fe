import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { TechPage } from '@/pages/TechPage';
import { LifePage } from '@/pages/LifePage';
import { SightPage } from '@/pages/SightPage';
import { HanziPage } from '@/pages/HanziPage';

/**
 * 路由配置
 *
 * 使用 React Router v7 的 createBrowserRouter
 * 支持 loader、action 等新特性
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/tech',
        element: <TechPage />,
      },
      {
        path: '/life',
        element: <LifePage />,
      },
      {
        path: '/sight',
        element: <SightPage />,
      },
      {
        path: '/hanzi',
        element: <HanziPage />,
      },
    ],
  },
]);

export default router;
