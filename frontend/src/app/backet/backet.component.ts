import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CompanyService } from '../company.service';
//import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-backet',
  templateUrl: './backet.component.html',
  styleUrls: ['./backet.component.css']
})
export class BacketComponent {
  items = this.companyService.getItems();

  constructor(
              private companyService: CompanyService,
              private formBuilder: FormBuilder,
  ) { }
  
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  }); 

  onSubmit(): void {
    // Process checkout data here
    this.items = this.companyService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

}
