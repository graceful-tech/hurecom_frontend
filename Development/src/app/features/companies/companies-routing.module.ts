import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCompanyComponent } from './list-company/list-company.component';
import { AddEditCompanyComponent } from './add-edit-company/add-edit-company.component';

const routes: Routes = [
  {
    path: '',
    component: ListCompanyComponent,
  },

  {
    path: 'add',
    component: AddEditCompanyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule {}
