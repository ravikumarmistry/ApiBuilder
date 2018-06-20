import { NgModule } from '@angular/core';
import { Form } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { EndpointsComponent } from './endpoints/endpoints.component';
import { SaveEndpointComponent } from './save-endpoint/save-endpoint.component';

const routes: Routes = [
  {
    path: '',
    component: EndpointsComponent
  },
  {
    path: 'save-endpoint',
    component: SaveEndpointComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiBuilderRoutingModule { }
