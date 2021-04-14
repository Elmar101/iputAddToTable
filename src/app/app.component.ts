import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Model, User } from 'src/models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showAllUser:boolean = false;

  items = new Model();

  get getTodoName():string{
    return this.items.todoName;
  }

  get getItems():User[]{
    if(this.showAllUser){
      return this.items.user;
    }
    return  this.items.user.filter(item=>  !item.action )
  }

  addUser(name:string){
    if(name){
      this.items.user.push(new User(name,false));
    }
  }
}
