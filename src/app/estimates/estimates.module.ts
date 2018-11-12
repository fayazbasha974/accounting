import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { EstimatesRoutingModule } from './estimates-routing.module';
import { CreatEstimateComponent } from './creat-estimate/creat-estimate.component';
import { EstimatesComponent } from './estimates.component';

@NgModule({
  declarations: [CreatEstimateComponent, EstimatesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    EstimatesRoutingModule
  ]
})
export class EstimatesModule { }
