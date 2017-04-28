import {Todo} from './todo';

export class App {

  constructor() {
    this.heading         = 'Todos';
    this.todos           = [
      new Todo('Build yet another todo app using Aurelia'),
      new Todo('See what the trash talk is all about')
    ];
    this.todoDescription = '';
    this.config = {
      hideCompleted: true
    };
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

}
