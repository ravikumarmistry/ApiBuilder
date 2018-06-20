import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApiBuilderRoutingModule } from './api-builder-routing.module';
import { EndpointsComponent } from './endpoints/endpoints.component';
import { SaveEndpointComponent } from './save-endpoint/save-endpoint.component';

@NgModule({
  imports: [
    CommonModule,
    ApiBuilderRoutingModule,
    FormsModule
  ],
  declarations: [EndpointsComponent, SaveEndpointComponent]
})
export class ApiBuilderModule { }
