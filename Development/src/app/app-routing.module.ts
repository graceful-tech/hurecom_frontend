import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'companies',
    loadChildren: () =>
      import('./features/companies/companies.module').then(
        (m) => m.CompaniesModule
      ),
  },
  {
    path: 'companies/add',
    loadChildren: () =>
      import('./features/companies/companies.module').then(
        (m) => m.CompaniesModule
      ),
  },
  {
    path:'contacted',
    loadChildren: () =>
      import('./features/companies/companies.module').then(
        (m) => m.CompaniesModule
      ),
  },

  {
    path: 'customers',
    loadChildren: () =>
      import('./features/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },

  {
    path: 'payments',
    loadChildren: () =>
      import('./features/payments/payments.module').then(
        (m) => m.PaymentsModule
      ),
  },

  {
    path: 'invoice',
    loadChildren: () =>
      import('./features/invoice/invoice.module').then(
        (m) => m.InvoiceModule
      ),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
