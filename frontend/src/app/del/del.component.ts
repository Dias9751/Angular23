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


  /*****************************************/
  updatePost() {
    const postData = {
      id: 1, // replace with the actual post ID
      name: "Wolt",
      ph_delivery: "https://woltpartner.dk/wp-content/uploads/2021/08/BTQ_wolt_bike_couriers_6K_v03@2x.jpg",
      rating: 5.4,
    };

    this.companyService.updatePost(postData).subscribe(
      (response) => {
        console.log('Post updated successfully:', response);
      },
      (error) => {
        console.error('Error updating post:', error);
      }
    );
  }
  /*****************************************/

}