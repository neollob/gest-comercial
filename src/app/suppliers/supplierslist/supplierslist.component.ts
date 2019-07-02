import { Component, OnInit } from '@angular/core';
import suppliers from '../../shared/data/suppliers.model';

@Component({
  selector: 'app-supplierslist',
  templateUrl: './supplierslist.component.html',
  styleUrls: ['./supplierslist.component.scss']
})
export class SupplierslistComponent implements OnInit {
  suppliers = [];
  constructor() {
    this.suppliers = suppliers;
  }

  ngOnInit() {
  }

}
