import { GeneratorModel, GeneratorSteps } from './../_models/GeneratorModel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-save-endpoint',
  templateUrl: './save-endpoint.component.html',
  styleUrls: ['./save-endpoint.component.css']
})
export class SaveEndpointComponent implements OnInit {

  @Input() general: GeneratorModel;
  

  ngOnInit() {
  }

  SaveData(){
    debugger
    this.general.selectTabName = GeneratorSteps.properties;
    console.log(this.general);
  }

}
