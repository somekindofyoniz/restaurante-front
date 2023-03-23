import routerAdmin from './routes.admin';
import routerClient from './routes.client';
import { Error_404 } from '../pages';
import { BasicLayout } from '../layouts/BasicLayout'

//Spead operator to concatenate the array contents
const routes = [...routerAdmin,...routerClient, {
    path: '*',
    layout: BasicLayout,
    component: Error_404
}];

export default routes;