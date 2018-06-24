import { Component, OnInit } from '@angular/core';
import { GeneratorModel, GeneratorSteps } from '../_models/GeneratorModel';

@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.css']
})
export class EndpointsComponent implements OnInit {
  public general: GeneratorModel;
  constructor() {
    this.general = new GeneratorModel();
  }

  ngOnInit() {
  }

  changeTab(step: GeneratorSteps) {
    this.general.selectTabName = step;
  }

}
