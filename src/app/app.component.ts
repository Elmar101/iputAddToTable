import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Todo{
  constructor(
    public name?: string,
    public sname?: string){}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  item: Todo = new Todo();
  data: Todo[] = [];
  saveData(){
    console.log(this.item)
    this.data.push({...this.item})
    this.item.name ="";
    this.item.sname ="";
  }
}
