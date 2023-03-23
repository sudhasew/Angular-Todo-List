import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  onClick(todo: Todo) {
    if (confirm(`Are you sure to delete "${todo.title}"`)) {
      this.todoDelete.emit(todo);
    } else {
      return;
    }
  }
  onCheckBox(todo: Todo) {
    this.todoCheckBox.emit(todo);
  }
}
