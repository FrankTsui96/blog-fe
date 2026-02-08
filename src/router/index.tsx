import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Demo from '../pages/Demo';

/**
 * 路由配置
 *
 * 使用 React Router v7 的 createBrowserRouter
 * 支持 loader、action 等新特性
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  // 添加更多路由配置示例：
  {
    path: '/demo',
    element: <Demo />,
  },
  // {
  //   path: '/users/:id',
  //   element: <UserDetail />,
  //   loader: async ({ params }) => {
  //     return fetch(`/api/users/${params.id}`);
  //   },
  // },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

export default router;
