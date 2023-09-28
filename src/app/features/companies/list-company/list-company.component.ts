import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css'],
})
export class ListCompanyComponent {
  type!: string | null;
  selectedCompanies: Array<any> = [];
  searchForm!: FormGroup;
  company: Array<any> = [];
  totalRecords: number = 0;
  currentPage: number = 1;
  maxLimitPerPage: number = 10;
  location: Array<any> = [];
  selectedCompany!: any;
  companyItems!: MenuItem[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.type = params.get('type');
    });

    if (this.type == 'no-response') {
      this.searchCompanies(this.type);
    }

    // this.createSearchForm();
  }

  // createSearchForm(){
  //   this.searchForm = this.fb.group({

  //   })
  // }
  
  // onPageChange(event: any) {
  //   this.currentPage = event.page + 1;
  //   this.searchCompanies();
  // }


  searchCompanies(status: string) {
    
  }

  navigateToAdd( ){
 this.router.navigate(['/companies/add'])
  }
}


