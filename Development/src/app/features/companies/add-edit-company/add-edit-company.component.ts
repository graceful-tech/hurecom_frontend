import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValueSet } from 'src/app/models/admin/value-set.model';
import { Company } from 'src/app/models/company/company.model';
import { ApiService } from 'src/app/services/api.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-edit-company',
  templateUrl: './add-edit-company.component.html',
  styleUrls: ['./add-edit-company.component.css']
})
export class AddEditCompanyComponent {
  companyForm!: FormGroup;
  showError: boolean = false; 
  dataLoaded: boolean = true;
  usedAtsList: Array<ValueSet> = [];
  companyId!: number;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService,
    private gs: GlobalService,
  ){}

  ngOnInit(){
    this.createCompanyForm();
    this.getUsedAtsList();
  }

  createCompanyForm(){
    this.companyForm = this.fb.group({
      id: [''],
      companyName: ['', Validators.required],
      mobileNumber: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      emailId: ['', Validators.compose([Validators.required, Validators.email])],
      usedAts: [''],
      mentionAts: [''],
      branch: [''],
      location:[''],
      yearsOfActive:[''],
    })
  }
  getCompanyById() {
    const route = `companies/${this.companyId}`
    this.api.get(route).subscribe({
      next: response => {
        const company = response as Company;
        this.patchCompanyForm(company);
      }
    })
  }
  getUsedAtsList(){
    const route = 'value-sets/search-by-code';
    const postData = { valueSetCode: 'USED_ATS' }
    this.api.retrieve(route, postData).subscribe({
      next: response => {
        this.usedAtsList = response;
      },
    })
  }

  patchCompanyForm(company : Company){
    this.companyForm.patchValue({
      id:company?.id,
      companyName:company?.companyName,
      emailId:company?.emailId,
      usedAts:company?.usedAts,
      mentionAts:company?.mentionAts,
      branch:company?.branch,
      yearsOfActive:company?.yearsOfActive,

    })
  }
  
  saveCompany(){
   if(this.companyForm.valid){
    const route= 'companies/create';
    const postData =this.companyForm.value;

    this.api.create(route,postData).subscribe({
      next: response => {
        this.gs.showMessage(response?.status, response?.message);
        this.reset();
      },
      error: error => {
        this.gs.showMessage(error.error?.status, error.error?.message);
        this.dataLoaded = true;
      }
    })
   } else{
    this.dataLoaded = true;
    this.gs.showMessage('Error', 'Please enter all the mandatory fields.');
   }
  }
 
reset(){
  this.companyForm.reset();
}
  navigateToCompanies() {
    this.router.navigate(['/companies']);
  }  

}