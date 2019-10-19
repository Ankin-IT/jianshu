
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../common/header';
import AsyncDetail from '../pages/detail/loadable.js';//loadable按需加载方式

const AsyncHome = lazy(() => import(/* webpackChunkName:"home"*/  '../pages/home'));//lazy按需加载方式 
const AsyncList = lazy(() => import(/* webpackChunkName:"list"*/  '../pages/list'));

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
