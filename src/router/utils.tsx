import { Suspense } from 'react';
import { type RouteObject } from 'react-router-dom';
import { GlobalSpin } from '@/components/common/GlobalSpin';

/**
 * 处理路由数据，增加 Suspense 组件
 * @param routerData 路由数据
 * @returns 处理后的路由数据
 */
export function getRouterData(routerData: RouteObject[]): RouteObject[] {
  return routerData.map((route) => {
    if (route.children) {
      return {
        ...route,
        children: getRouterData(route.children),
      };
    }

    return {
      ...route,
      element: <Suspense fallback={<GlobalSpin />}>{route.element}</Suspense>,
    };
  });
}
