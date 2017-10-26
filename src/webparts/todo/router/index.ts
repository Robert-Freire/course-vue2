import * as Vue from 'vue';
import Router from 'vue-router';
import TodoComponent from '../components/todo/todoComponent/TodoComponent.vue';
import UserComponent from '../components/user/userComponent/userComponent.vue';
import { Component } from 'vue-router/types/router';

export default class RouterFactory {
    public static ROUTE_TASKS: string = '/';
    public static ROUTE_USERS: string = '/users';

    private static router: Router;
    public static create(): Router {
        Vue.use(Router);

        if (!this.router) {
            this.router = new Router({
                mode: 'abstract',
                routes: [
                    {
                        path: RouterFactory.ROUTE_TASKS,
                        name: RouterFactory.ROUTE_TASKS,
                        component: TodoComponent as Component,
                    },
                    {
                        path: RouterFactory.ROUTE_USERS,
                        name: RouterFactory.ROUTE_USERS,
                        component: UserComponent as Component,
                    },
                    { path: '*', redirect: RouterFactory.ROUTE_TASKS }
                ],
            });
        }
        return this.router;
    }
}
