import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../models';
import {CompanyService} from '../company.service';
//import {ActivatedRoute} from '@angular/router';
 
@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(
    private companyService: CompanyService,
    //private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getRestaurants();
  }
 
  getRestaurants() {
    this.companyService.getRestaurants().subscribe((data) => {
      this.restaurants = data;
    });
  }

  loaded = true;
  updateRestaurant() {
    this.loaded = false;
    this.companyService.updateRestaurant(this.restaurants as unknown as Restaurant).subscribe((delivery) => {
      console.log(delivery);
      this.loaded = true;
    });
  }

}