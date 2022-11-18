import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

  hoje: number = Date.now();

  public tarefa: string = "";
  public items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];

  addTarefa(){
    this.items.push(this.tarefa);
  }

  removeTarefa(item:any){
    this.items.splice( this.items.indexOf(item), 1)
  }
  
  constructor() { }
  
  ngOnInit(): void {     
  }
}
