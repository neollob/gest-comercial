import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Supplier from '../../shared/interfaces/supplier.interface';
import suppliers from '../../shared/data/suppliers.model';

@Component({
  selector: 'app-suppliersrequest',
  templateUrl: './suppliersrequest.component.html',
  styleUrls: ['./suppliersrequest.component.scss']
})
export class SuppliersrequestComponent implements OnInit {
  identifier: any;
  selectedSupplier: Supplier;
  suppliers = [];
  constructor(private supplier: ActivatedRoute) { }

  ngOnInit() {
    this.suppliers = suppliers;
    this.identifier = this.supplier.snapshot.params.id;
    this.selectedSupplier = this.suppliers.find((e) => {
      if (e.index == this.identifier) {
        return e;
      }
    });
  }

}
