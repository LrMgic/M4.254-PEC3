/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
 export class TodoController {
  service: any;
  view: any;

  constructor(service: any, view: any) {
    this.service = service;
    this.view = view;

    // Explicit this binding
    this.service.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    // Display initial todos
    this.onTodoListChanged(this.service.todos);
  }

  onTodoListChanged = (todos: any) => {
    this.view.displayTodos(todos);
  };

  handleAddTodo = (todoText: any) => {
    this.service.addTodo(todoText);
  };

  handleEditTodo = (id: string, todoText: any) => {
    this.service.editTodo(id, todoText);
  };

  handleDeleteTodo = (id: string) => {
    this.service.deleteTodo(id);
  };

  handleToggleTodo = (id: string) => {
    this.service.toggleTodo(id);
  };
}
