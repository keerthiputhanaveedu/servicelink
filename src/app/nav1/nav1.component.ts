import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.scss']
})
export class Nav1Component implements OnInit {
  name: string;
  contact: string;
  country: string;
  opened = false;
  element: any;

  categorie_array = [
    {
      name: 'Category 1',
      seq: 1,
    },
    {
      name: 'Category 2',
      seq: 2,
    },
    {
      name: 'Category 3',
      seq: 3
    },
    {
      name: 'Category 4',
      seq: 4
    },
    {
      name: 'Category 5',
      seq: 5
    },
    {
      name: 'Category 6',
      seq: 6
    }
  ];


  constructor() { }

  dropTest(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.categorie_array, event.previousIndex, event.currentIndex);
  }

  addNewButton(){
    this.opened = !this.opened;
    this.element = document.getElementById('add-new-button');
    if(this.opened === true){
      this.element.classList.add("add-new-button-active");
    }else{
      this.element.classList.remove("add-new-button-active");
    }

  }

  add() {
    this.categorie_array.push({
      name: this.name,
      seq: this.categorie_array.length + 1,

    });
    this.opened = false;
    this.element.classList.remove("add-new-button-active");
    this.name = '';
  }

  delete(item) {
    for (let i = 0; i < this.categorie_array.length; i++) {
      if (this.categorie_array[i].name === item.name) {
        this.categorie_array.splice(i, 1);
      }
    }
  }

  ngOnInit() {
  }

}
