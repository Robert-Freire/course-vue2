import * as Vue from 'vue';
import { Component } from 'vue-property-decorator';
import TodoItem from '../todo-item/Todoitem.vue';

@Component({
    components: {
        'todo-item': TodoItem as Vue.Component,
    },
})
export default class Todo extends Vue {
    public mytodos: string[] = [];
    public todoTitle: string = '';
    public message: string = 'Tasks';
    public addTodo(): void {
        if (!this.todoTitle) {
            return;
        }
        this.mytodos.push(this.todoTitle);
        this.todoTitle = '';
    }

    public completed(todo: string): void {
        const index: number = this.mytodos.indexOf(todo, 0);
        if (index > -1) {
            this.mytodos.splice(index, 1);
        }
    }
}
