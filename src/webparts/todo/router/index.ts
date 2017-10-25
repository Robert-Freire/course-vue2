import * as Vue from 'vue';
import Router from 'vue-router';
import  TodoComponent  from '../components/todo/Todo.vue'
import { Component } from 'vue-router/types/router';
// import QAComponent from '../containers/QA/qa.vue';
// import PerformanceComponent from '../containers/Performance/performance.vue';
// import EvaluationComponent from '../containers/Evaluation/evaluation.vue';
// import ProductSelectionComponent from '../components/product-selection/product-selection.vue';

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
                ],
            });

        }
        return this.router;
    }
}
