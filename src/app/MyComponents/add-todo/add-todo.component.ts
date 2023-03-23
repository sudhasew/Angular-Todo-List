import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  id: number;
  title: string;
  description: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo = {
      id: this.id,
      title: this.title,
      description: this.description,
      active: true,
    };
    this.todoAdd.emit(todo);
    this.title = '';
    this.description = '';
  }
}
