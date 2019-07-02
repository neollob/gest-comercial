import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import customers from '../../shared/data/data';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {

  public identifier: any;
  public selectedCustomer: {
    _id: string,
    index: number,
    guid: string,
    age: number,
    name: string,
    gender: string,
    company:string,
    email: string,
    phone: string,
    address:string
  };

  constructor(private route: ActivatedRoute) {



  }

  ngOnInit() {
     this.route.params.subscribe(miParams => {this.identifier = miParams['id'];})
     this.selectedCustomer = customers.find(e => {return e.index == this.identifier; });



  }

}
