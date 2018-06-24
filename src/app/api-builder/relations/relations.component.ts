import { Component, OnInit, Input } from '@angular/core';
import { GeneratorModel, GeneratorSteps } from '../_models/GeneratorModel';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css']
})
export class RelationsComponent implements OnInit {


  @Input() general: GeneratorModel;


  ngOnInit() {
  }

  SaveData() {
    debugger
    this.general.selectTabName = GeneratorSteps.properties,
    console.log(this.general);
  }
  
}
