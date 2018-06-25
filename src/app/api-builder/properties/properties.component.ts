import { Component, OnInit, Input } from '@angular/core';
import { GeneratorModel, GeneratorSteps, PropertiesModel, TypeDef, SimplePropertiesModel } from '../_models/GeneratorModel';
import { Property_Types } from '../_models/_globals.model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  keys: string[];
  @Input() properties: PropertiesModel;
  public property: SimplePropertiesModel = new SimplePropertiesModel();
  public types = Property_Types;


  ngOnInit() {
    this.properties['name'] = { type: 'string', default: 'abc', required: false };
    console.log(Object.keys(this.properties));

    // this.keys = Object.keys(this.general.properties);
    // this.typeDef = new TypeDef();
  }

  SaveData() {
    //console.log(this.general);
  }

  addproperty() {
    //this.general.properties[this.name] = new TypeDef();
  }


}
