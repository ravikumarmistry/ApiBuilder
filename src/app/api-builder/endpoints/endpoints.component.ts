import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.css']
})
export class EndpointsComponent implements OnInit {

  public selectTabName: string;
  constructor() { 
    this.selectTabName = 'general';
  }

  ngOnInit() {
  }

  changeTab(name : string){
    this.selectTabName = name;
  }

}
