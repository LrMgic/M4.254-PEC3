import { TodoController } from "./controllers/todo.controller";
import { TodoService } from "./services/todo.service";
import { TodoView } from "./views/todo.views ";
var app = new TodoController(new TodoService(), new TodoView());