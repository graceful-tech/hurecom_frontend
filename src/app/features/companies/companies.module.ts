import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { ListCompanyComponent } from './list-company/list-company.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditCompanyComponent } from './add-edit-company/add-edit-company.component';

@NgModule({
  declarations: [
    ListCompanyComponent,
    AddEditCompanyComponent,
  ],
  imports: [CommonModule, CompaniesRoutingModule, SharedModule],
})
export class CompaniesModule {}
