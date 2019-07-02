import { Component, OnInit } from '@angular/core';
import customers from '../../shared/data/data.model';

@Component({
  selector: 'app-customerslist',
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.scss']
})
export class CustomerslistComponent implements OnInit {
  customers=[];
  constructor() {
    this.customers=customers;
  }

  ngOnInit() {
  }

}
