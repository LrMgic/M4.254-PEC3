import * as _ from "lodash";
import { TodoController } from "./controllers/todo.controller";
import { TodoService } from "./services/todo.service";
import { TodoView } from "./views/todo.views ";



function component() {
  const element = document.createElement("div");
  
  const app = new TodoController(new TodoService(), new TodoView());

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
