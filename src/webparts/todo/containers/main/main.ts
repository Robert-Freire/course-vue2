import * as Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { ITodoWebPartProps } from '../../ITodoWebPartProps';
import RouterFactory from '../../router/index';

@Component({
})
export default class Todo extends Vue implements ITodoWebPartProps {
  @Prop()
  public message: string;
  @Prop()
  public todos: string[];

  public mytodos: string[] = this.todos;
  public todoTitle: string = '';
}
