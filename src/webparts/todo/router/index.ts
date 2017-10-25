import * as Vue from 'vue';
import Router from 'vue-router';
import TodoComponent from '../components/todo/Todo.vue';
import UserComponent from '../components/user/user.vue';
import { Component } from 'vue-router/types/router';

export default class RouterFactory {
    public static ROUTE_QA: string = 'QA';
    public static ROUTE_PERFORMANCE: string = 'Performance';
    public static ROUTE_EVALUATION: string = 'Evaluation';
    public static ROUTE_PRODUCT_SELECTION: string = 'Product';

    private static router: Router;
    public static create(): Router {
        Vue.use(Router);

        if (!this.router) {
            this.router = new Router({
                mode: 'abstract',
                routes: [
                    {
                        path: '/',
                        name: '/',
                        component: TodoComponent as Component,
                    },
                    {
                        path: '/users',
                        name: '/users',
                        component: UserComponent as Component,
                    },
                ],
            });
        }
        return this.router;
    }
}
