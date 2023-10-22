import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DelComponent} from './del/del.component';
import { RestComponent } from './rest/rest.component';
import {CatgComponent} from './catg/catg.component';
import { ProductComponent } from './product/product.component';
import { BacketComponent } from './backet/backet.component';

const routes: Routes = [
  {path: 'backet', component: BacketComponent},
  {path: 'delivery_companies', component: DelComponent},
  {path: 'delivery_companies/restaurants', component: RestComponent},
  {path: 'delivery_companies/restaurants/categories', component: CatgComponent},
  {path: 'delivery_companies/restaurants/categories/:id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }