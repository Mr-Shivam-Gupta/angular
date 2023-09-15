import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.todo = {} as Todo; // Initialize todo as an empty object or with default values
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggerd")
  }
}
