import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddEditCustomerComponent,
    ListCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
