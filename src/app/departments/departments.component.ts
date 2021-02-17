import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
departments=[
 {"id":1,"name":"CSE"},{"id":2,"name":"EEE"},{"id":3,"name":"ECE"},{"id":4,"name":"Mechanical"}
];

  constructor() { }

  ngOnInit(): void {
  }

}
