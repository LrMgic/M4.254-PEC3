
export class TodoDTO {
  id: string;
  text: string;
  complete: boolean;

  constructor(text: string, complete: boolean = false ) {

    function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

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

