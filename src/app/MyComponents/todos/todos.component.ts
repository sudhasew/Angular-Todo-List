import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'This is Title',
        description: 'This is all about desc.',
        active: true,
      },
      {
        id: 2,
        title: 'This is Title 2',
        description: 'This is all about desc 2.',
        active: false,
      },
    ];
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
