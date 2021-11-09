import {v4 as uuidv4} from 'uuid';


export class TodoDTO {
  id: string;
  text: string;
  complete: boolean = false;

  constructor(text: string, complete: boolean) {
    this.id = uuidv4();
    this.text = text;
    this.complete = complete;
  }
}
