import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddEditCustomerComponent } from '../add-edit-customer/add-edit-customer.component';
import { ApiService } from 'src/app/services/api.service';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css'],
})
export class ListCustomersComponent {
  constructor(
    private api: ApiService,
    private router: Router,
    private dialogService: DialogService
  ) {}

  openAddCustomerModal() {
    const ref = this.dialogService.open(AddEditCustomerComponent, {
      header: 'Add Customer',
      width: '40%',
      height: '65%',
    });

    ref.onClose.subscribe((response) => {
      if (response === 'CLOSED') {
      }
    });
  }
}
