import { Component, OnInit } from '@angular/core';
import Customer from '../../shared/interfaces/customer.interface';
import { ActivatedRoute } from '@angular/router';
import customers from '../../shared/data/customers.model';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerdataComponent implements OnInit {
  identifier: any;
  selectedCust: Customer;
  custom = [];
  constructor(private customer: ActivatedRoute) { }
  ngOnInit() {
    this.custom = customers;
    this.identifier = this.customer.snapshot.params.id; /** crea un elemento cada vez que clickamos */
    // this.identifier = this.customer.snapshot.params['id'];
    // this.customer.subscribe(params=>{this.identifier=params['id']});/**crea un observable el cual se produce asincronamente  */
    // @Input() cust:Customer;
    this.selectedCust = this.custom.find((e) => {
      if (e.index == this.identifier) {
        return e;
      }
    });
  }
}
