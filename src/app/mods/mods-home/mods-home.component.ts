import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  
  modalOpen = false;

  items =[
    { title:'why is the sky blue ?', content : 'The sky is blue because it is'},
    { title:'what does the orange taste like ?', content : 'An orange taste likes sweet'},
    { title:'what is the color of cat ?', content : 'The cat is white '},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
