import { Component } from '@angular/core';
import{ Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
todos: Todo[];
constructor(){
  this.todos =[
   {
    sno: 1 ,
    title: "This is title",
    desc: "Description",
    active: true
   },
   {
    sno: 2 ,
    title: "This is title2",
    desc: "Description",
    active: true
   },
   {
    sno: 3 ,
    title: "This is title3",
    desc: "Description",
    active: true
   },
  ]
}
deleteTodo(todo: Todo){
console.log(todo);
const index = this.todos.indexOf(todo);
this.todos.splice(index, 1)
}

}
