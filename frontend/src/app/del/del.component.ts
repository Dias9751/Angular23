import { Component, OnInit } from '@angular/core';
import {Delivery} from '../models';
import {CompanyService} from '../company.service';
  
@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent implements OnInit {

  deliveries: Delivery[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getDeliveries();
  }

  getDeliveries() {
    this.companyService.getDeliveries().subscribe((data) => {
      this.deliveries = data;
    });
  }

  loaded = true;
  updateDelivery() {
    this.loaded = false;
    this.companyService.updateDelivery(this.deliveries as unknown as Delivery).subscribe((delivery) => {
      console.log(delivery);
      this.loaded = true;
    });
  }

}