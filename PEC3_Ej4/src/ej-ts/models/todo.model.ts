import {v4 as uuidv4} from 'uuid';


export class TodoDTO {
  id: string;
  text: string;
  complete: boolean;

  constructor(text: string, complete: boolean = false ) {
    this.id = uuidv4();
    this.text = text;
    this.complete = complete;
  }
}


export class TodoChild extends TodoDTO {
  filter(arg0: (id: string) => boolean): TodoChild {
    throw new Error("Method not implemented.");
  }
  map(arg0: (todo: TodoDTO) => TodoDTO): TodoChild {
    throw new Error("Method not implemented.");
  }
  push(arg0: TodoDTO) {
    throw new Error("Method not implemented.");
  }
  children: TodoDTO[];
}

