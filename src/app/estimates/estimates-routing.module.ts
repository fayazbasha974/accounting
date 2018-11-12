import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimatesComponent } from './estimates.component';
import { CreatEstimateComponent } from './creat-estimate/creat-estimate.component';

const routes: Routes = [
  {path: '', component: EstimatesComponent },
  {path: 'create-estimate', component: CreatEstimateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatesRoutingModule { }
