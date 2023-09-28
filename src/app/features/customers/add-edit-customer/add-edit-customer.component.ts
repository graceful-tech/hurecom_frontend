import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ApiService } from 'src/app/services/api.service';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css'],
})
export class AddEditCustomerComponent {
  customerForm!: FormGroup;
  spinnerFlag: boolean = false;
  status: Array<any> = [];
  addFlag: boolean = true;
  dataLoadedFlag: boolean = true;
  validUserName: boolean = true;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public ref: DynamicDialogRef,
    private gs: GlobalService
  ) {
    this.status = [
      {
        dataValue: 'Y', //in db it should be y
        displayValue: 'Active',
      },
      {
        dataValue: 'N', // in db it should be n
        displayValue: 'In Active',
      },
    ];

    //this.status = api.status;
  }

  ngOnInit() {
    // this.spinnerFlag = true;
    this.createCustomerForm();
  }
  /**
   * This method is used to create customer form.
   */
  createCustomerForm() {
    this.customerForm = this.fb.group({
      id: [''],
      companyName: ['', Validators.required],
      customerName: [''],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      altNumber: [''],
      location: ['', Validators.required],
      status: [''],
    });
  }

  /**
   * This method is used to create customer.
   */
  createCustomers() {
    this.dataLoadedFlag = false;
    const route = 'customers/create';
    const postData = this.customerForm.getRawValue();
    this.api.create(route, postData).subscribe((response) => {
      if (response['status'] === 'SUCCESS') {
        this.closeModal();
        this.reset();
        this.gs.setMessage({
          severity: 'success',
          summary: 'Success',
          detail: 'Customer added successfully.',
        });
      } else {
        this.gs.setMessage({
          severity: 'error',
          summary: 'Error',
          detail: 'Error in adding customer.',
        });
      }
      this.dataLoadedFlag = true;
    });
  }

  createCustomer() {
    this.dataLoadedFlag = false;
    const route = 'customers/create';
    const postData = this.customerForm.getRawValue();
    this.api.create(route, postData).subscribe({
      next: (response) => {
        console.log(response);
        this.dataLoadedFlag = true;
        
      },
      error: (error) => {
        console.log(error);
        this.dataLoadedFlag = true;
      },
    });
  }

  closeModal() {
    this.ref.close('CLOSED');
  }

  reset() {
    this.customerForm.reset();
    this.customerForm.patchValue({ status: 'A' });
  }
}
