import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter<Todo>();

  title: string = '';
  desc: string = '';

  onSubmit() {
    const todo: Todo = {
      sno: 8, // You might want to generate this dynamically
      title: this.title,
      desc: this.desc,
      active: false
    };

    this.todoAdd.emit(todo);
  }
}





