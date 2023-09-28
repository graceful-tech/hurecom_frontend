import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';


@NgModule({
  declarations: [
    ListInvoicesComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
