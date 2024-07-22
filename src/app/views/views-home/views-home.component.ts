import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats =  [
    { value: 22, label: '#number of users'},
    { value: 900, label: 'Revenue'},
    { value: 50, label: 'Reviews'}
  ];

  items =[
    { image: '/assets/images/biking.jpeg',
      title: 'Biking',
      description: 'This is a Fantastic bike'
    },

    { image: '/assets/images/tree.jpeg',
      title: 'Tree',
      description: 'Great Green Shade Tree'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
