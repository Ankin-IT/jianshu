
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../common/header';

const AsyncHome = lazy(() => import('../pages/home'));
const AsyncDetail = lazy(() => import('../pages/detail'));
const AsyncList = lazy(() => import('../pages/list'));

const BasicRoute = () => (
    <BrowserRouter>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/" component={AsyncHome}/>
            <Route exact path="/detail" component={AsyncDetail}/>
            <Route exact path="/list" component={AsyncList}/>
        </Switch>
      </Suspense>
    </BrowserRouter>
);

export default BasicRoute;
