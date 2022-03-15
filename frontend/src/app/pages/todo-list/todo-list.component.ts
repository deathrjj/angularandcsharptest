import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo { 
  value: string; 
  editMode: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit  {
  todos: Todo[] = [];

  value: string = "";

  constructor(private http: HttpClient)  {}

  ngOnInit(): void {
    this.http.get<Todo[]>('/api/todo').subscribe(todos => {
      this.todos = todos;
    });
  }

  addNewTodo(): void {
    console.log(this.value);

    const todo: Todo = { value: this.value, editMode: false };

    this.todos.push(todo);
    this.value = '';

    this.http.post('/api/todo', todo).subscribe();
  }


  deleteTodo(index: number): void {
    this.todos.splice(index, 1);

    this.http.delete(`/api/todo/${index}`).subscribe();
  }

  editTodo(index: number): void{
    this.todos[index].editMode = true;
  }

  confirmEditTodo(index: number): void{
    const todo = this.todos[index]
    todo.editMode=false;

    this.http.post(`/api/todo/edit/${index}`, todo).subscribe();
  }
}
