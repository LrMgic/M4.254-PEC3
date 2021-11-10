var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { TodoDTO } from "../models/todo.model";
/**
 * @class Service
 *
 * Manages the data of the application.
 */
var TodoService = /** @class */ (function () {
    function TodoService() {
        this.todos = (JSON.parse(localStorage.getItem("todos")) || []).map(function (todo) { return new TodoDTO(todo); });
    }
    TodoService.prototype.bindTodoListChanged = function (callback) {
        this.onTodoListChanged = callback;
    };
    TodoService.prototype._commit = function (todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    };
    TodoService.prototype.addTodo = function (text) {
        this.todos.push(new TodoDTO(text));
        this._commit(this.todos);
    };
    TodoService.prototype.editTodo = function (id, updatedText) {
        this.todos = this.todos.map(function (todo) {
            return todo.id === id
                ? new TodoDTO(__assign(__assign({}, todo), { text: updatedText }))
                : todo;
        });
        this._commit(this.todos);
    };
    TodoService.prototype.deleteTodo = function (_id) {
        this.todos = this.todos.filter(function (id) { return id !== _id; });
        this._commit(this.todos);
    };
    TodoService.prototype.toggleTodo = function (_id) {
        this.todos = this.todos.map(function (todo) {
            return todo.id === _id ? new TodoDTO(__assign(__assign({}, todo), { complete: !todo.complete })) : todo;
        });
        this._commit(this.todos);
    };
    return TodoService;
}());
export { TodoService };
