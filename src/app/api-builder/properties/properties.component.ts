import { Component, OnInit, Input } from '@angular/core';
import { GeneratorModel, GeneratorSteps, PropertiesModel, TypeDef } from '../_models/GeneratorModel';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  keys: string[];
  @Input() general: GeneratorModel;
  public typeDef: TypeDef;
  public name: string;


  ngOnInit() {
    this.general.properties = {
      name: { type: "String", default: "asasasasas" }
    }
    this.keys = Object.keys(this.general.properties);
    this.typeDef = new TypeDef();
  }

  SaveData() {
    debugger
    this.general.selectTabName = GeneratorSteps.relatons;
    console.log(this.general);
  }

  addproperty() {
    this.general.properties[this.name] = new TypeDef();
  }


}
