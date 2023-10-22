export interface Delivery{
    id: number;
    name: string;
    ph_delivery: string;
    rating: number;
  }
    
export interface AuthToken {
  token: string;
}
  
export interface Restaurant{
  id: number;
  name: string;
  description: string;
  ph_restaurant: string;
  city: string;
  address: string;
} 

export interface Category{
  id: number;
  name: string;
  description: string;
  photo: string;
} 

export interface Product{
  id: number;
  name: string;
  description: string;
  price: number;
  ph_product: string;
} 

export interface Login_to{
  id: number;
  name: string;
  password: string;
  email: string;
} 