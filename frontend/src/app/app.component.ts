import { Component, OnInit } from '@angular/core';
import {CompanyService} from './company.service';
import { Login_to, Product } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /*********/filteredProducts: any[] = [];
  /*********/searchQuery: any;
  /*********/products: Product[] = [];
  login_to: Login_to[] = [];

  title = 'frontend';

  logged = false;
  username = '';
  password = '';

  constructor(private companyService: CompanyService) { }
  

  ngOnInit(): void {
    /*********/this.getProducts2();
    this.getLogin_to();
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
    
  }

  getLogin_to(){
    this.companyService.getLogin_to().subscribe((data) => {
      this.login_to = data;
    });

  }

  /*********/getProducts2() {
    this.companyService.getProducts2().subscribe((data) => {
      this.products = data;
    });
  }


  login() {
    
    this.companyService.login(this.username, this.password).subscribe((data) => {

      localStorage.setItem('token', data.token);

      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }

  login_too() {
    for (let i=0; i<this.login_to.length; i++){
      if(this.login_to[i].name === this.username && this.login_to[i].password === this.password){
        this.logged = true;
        this.username = '';
        this.password = '';
      }

    }
  }


  logout() {
    this.logged = false;
    localStorage.removeItem('token');
  }

/*********/  searchProducts() {
    if (this.searchQuery) {
      this.filteredProducts = this.products.filter((product) => {
        // You can customize this search logic to match the properties you want to search in.
        return (
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    } else {
      this.filteredProducts = [];
    }
  }

  addToCart(product: Product) {
    this.companyService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}