import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  title: string = "Todos";
  todos: Todo[];
  inputTodo: string = "";

  ngOnInit(): void {
    this.todos = []
  }
  isDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.isCompleted = !v.isCompleted;
      console.log
      return v
    })
  };

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id)
  };

  addTodo() {
    if (this.inputTodo !== "") {
      this.todos.push({
        content: this.inputTodo,
        isCompleted: false
      });
      this.inputTodo = "";
    }
  };

  deleteAll() {
    this.todos = [];
  }

}

