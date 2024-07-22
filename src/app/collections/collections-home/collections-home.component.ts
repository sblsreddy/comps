import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {name:'Joe', age: 28, job: 'Support', employed: true},
    {name:'John', age: 48, job: 'Manager', employed: false},
    {name:'Mike', age: 38, job: 'Tech Developer', employed: true}
  ];

  headers = [
      {key: 'employed', label: 'Has a job ?'},
      {key: 'name', label: 'Name'},
      {key: 'age', label: 'Age'},
      {key: 'job', label: 'Job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
