import { Component, OnInit } from '@angular/core';
import customers from '../../shared/data/customers.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomerslistComponent implements OnInit {
  customers = [];
  constructor() {
    this.customers = customers;
  }

  ngOnInit() {
  }

}
