import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTER_ITEMS, { IRouterItems } from './routerItems';
// import NotFoundPage from '@pages/NotFoundPage';

const functionInvoke = (route: IRouterItems): any => {
  return <Route path={route.path} element={<route.element />} key={route.key} />;


};

const Router: React.FC = () => {
  return (
    <Routes>
      {ROUTER_ITEMS.map(route => functionInvoke(route))}
    </Routes>
  );
};
export default Router;
