import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken, Delivery, Restaurant, Category, Product, Login_to} from './models';
 
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URl = 'http://127.0.0.1:8000/';/*'http://localhost:8000';*/
 
  constructor(private http: HttpClient) { }

  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URl}/admin/login/`, {
      username,
      password
    });
  }

  getLogin_to(): Observable<Login_to[]> {
    return this.http.get<Login_to[]>(`${this.BASE_URl}/menu/login_to/`);
  }
 
  getDeliveries(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(`${this.BASE_URl}/menu/delivery_companies/`);
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.BASE_URl}/menu/restaurants/`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URl}/menu/categories/`);
  }

  getProducts(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URl}/menu/categories/${id}/product/`);
  }

  getProducts2(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URl}/menu/products/`);
  }

  updateDelivery(delivery: Delivery): Observable<Delivery> {
    return this.http.put<Delivery>(`${this.BASE_URl}/admin/menu/delivery/${delivery.id}/change/`, delivery);
  }

  updateRestaurant(delivery: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(`${this.BASE_URl}/admin/menu/restaurant/${delivery.id}/change/`, delivery);
  }

  updateCategory(delivery: Category): Observable<Category> {
    return this.http.put<Category>(`${this.BASE_URl}/admin/menu/category/${delivery.id}/change/`, delivery);
  }

  updateProduct(delivery: Product): Observable<Product> {
    return this.http.put<Product>(`${this.BASE_URl}/admin/menu/product/${delivery.id}/change/`, delivery);
  }
}
