import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListResMalekrahalComponent } from './list-res-malekrahal/list-res-malekrahal.component';
import { DetailResMalekrahalComponent } from './detail-res-malekrahal/detail-res-malekrahal.component';




import { AddResMalekrahalComponent } from './add-res-malekrahal/add-res-malekrahal.component';

const routes: Routes = [
  { path: '', component: ListResMalekrahalComponent },
 { path: 'detail-residence/:id', component: DetailResMalekrahalComponent },
 { path: 'list-residences', component: ListResMalekrahalComponent },
  { path: 'add-residence', component: AddResMalekrahalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}