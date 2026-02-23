import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/Home';
import { TechPage, TechDetailPage } from '@/pages/Tech';
import { LifePage, LifeDetailPage } from '@/pages/Life';
import { SightPage, SightDetailPage } from '@/pages/Sight';
import { HanziPage, HanziDetailPage } from '@/pages/Hanzi';

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
        path: '/tech/:id',
        element: <TechDetailPage />,
      },
      {
        path: '/life',
        element: <LifePage />,
      },
      {
        path: '/life/:id',
        element: <LifeDetailPage />,
      },
      {
        path: '/sight',
        element: <SightPage />,
      },
      {
        path: '/sight/:id',
        element: <SightDetailPage />,
      },
      {
        path: '/hanzi',
        element: <HanziPage />,
      },
      {
        path: '/hanzi/:id',
        element: <HanziDetailPage />,
      },
    ],
  },
]);

export default router;
