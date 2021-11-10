import { TodoDTO } from "../models/todo.model";

/**
 * @class Service
 *
 * Manages the data of the application.
 */
 export class TodoService {
  todos: any;
  onTodoListChanged: any;

  constructor() {
    this.todos = (JSON.parse(localStorage.getItem("todos")) || []).map(
      todo => new TodoDTO(todo)
    );
  }

  bindTodoListChanged(callback:any) {
    this.onTodoListChanged = callback;
  }

  _commit(todos:any) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text:string) {
    this.todos.push(new TodoDTO(text));

    this._commit(this.todos);
  }

  editTodo(id:string, updatedText:string) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new TodoDTO({
            ...todo,
            text: updatedText
          })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(_id) {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this._commit(this.todos);
  }

  toggleTodo(_id) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new TodoDTO({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}
