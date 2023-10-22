import { Component, OnInit } from '@angular/core';
import {Product} from '../models';
import {CompanyService} from '../company.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  selectedSortOption: any;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute
  ) { }

  addToCart(product: Product) {
    this.companyService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.companyService.getProducts(id).subscribe((data) => {
         this.products = data;
      });
    });
  }

  loaded = true;
  updateProduct() {
    this.loaded = false;
    this.companyService.updateProduct(this.products as unknown as Product).subscribe((delivery) => {
      console.log(delivery);
      this.loaded = true;
    });
  }

  sortProducts() {
    if (this.selectedSortOption === 'priceAsc') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (this.selectedSortOption === 'priceDesc') {
      this.products.sort((a, b) => b.price - a.price);
    } else if (this.selectedSortOption === 'nameAsc') {
      this.products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.selectedSortOption === 'nameDesc') {
      this.products.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

}
