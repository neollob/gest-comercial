import { Component, OnInit } from '@angular/core';
import suppliers from '../../shared/data/suppliers.model';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.scss']
})
export class SupplierslistComponent implements OnInit {
  suppliers = [];
  constructor() {
    this.suppliers = suppliers;
  }

  ngOnInit() {
  }

}
