import * as React from 'react';
import AuthorizeRoute  from './components/api-authorization/AuthorizeRoute';

import { Route } from 'react-router';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import Layout from './components/layout/Layout';
import './custom.css';
import Details from './views/details/Details';
import Home from './views/Home';

export default () => (
    <Layout>
        <AuthorizeRoute exact path='/' component={Home} />
        <AuthorizeRoute path='/samples/:name' component={Details} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
    </Layout>
);