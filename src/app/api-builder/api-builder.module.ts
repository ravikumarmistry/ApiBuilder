import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApiBuilderRoutingModule } from './api-builder-routing.module';
import { EndpointsComponent } from './endpoints/endpoints.component';
import { SaveEndpointComponent } from './save-endpoint/save-endpoint.component';
import { PropertiesComponent } from './properties/properties.component';
import { RelationsComponent } from './relations/relations.component';

@NgModule({
  imports: [
    CommonModule,
    ApiBuilderRoutingModule,
    FormsModule
  ],
  declarations: [EndpointsComponent, SaveEndpointComponent, PropertiesComponent, RelationsComponent]
})
export class ApiBuilderModule { }
