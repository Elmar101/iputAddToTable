
export class Model {
  todoName!: string;
  user:User[];

  constructor(){
    this.todoName = 'Todo List';
    this.user = [
      new User("Elmar",true),
      new User("Eldar",false),
      new User("Xan",false),
      new User("Resad",false),
      new User("Ramil",false)
    ]
  }
}

export class User {
  userName!: string;
  action!: boolean;
  constructor(userName:string, action:boolean){
    this.userName = userName;
    this.action = action;
  }
}
