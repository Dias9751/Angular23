import { Component, OnInit } from '@angular/core';
import {Category} from '../models';
import {CompanyService} from '../company.service';
//import {ActivatedRoute} from '@angular/router';
 
@Component({
  selector: 'app-catg',
  templateUrl: './catg.component.html',
  styleUrls: ['./catg.component.css']
})
export class CatgComponent implements OnInit {
  categories: Category[] = [];
  

  constructor(
    private companyService: CompanyService,
    //private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.companyService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  loaded = true;
  updateCategory() {
    this.loaded = false;
    this.companyService.updateCategory(this.categories as unknown as Category).subscribe((delivery) => {
      console.log(delivery);
      this.loaded = true;
    });
  }
}