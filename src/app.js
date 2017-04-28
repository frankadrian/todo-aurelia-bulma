import {Todo} from './todo';
import {observable} from 'aurelia-framework';


export class App {

  @observable todos;

  constructor() {
    this.heading         = 'Todos';
    this.todos           = [
      new Todo('Build yet another todo app using Aurelia'),
      new Todo('See what the trash talk is all about')
    ];
    this.todoDescription = '';
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.unshift(new Todo(this.todoDescription));
      this.todoDescription = '';
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  checkTodo(todo) {
    todo.done = !todo.done;
  }

  todosChanged(newValue, oldTodo) {
    console.log('app.js:33:newValue', newValue);
  }
}
