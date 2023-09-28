import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { ListPaymentsComponent } from './list-payments/list-payments.component';



@NgModule({
  declarations: [
    ListPaymentsComponent,
   
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
