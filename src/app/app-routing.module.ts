import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListproductsComponent } from './product/listproducts/listproducts.component';
import { CreateProductComponent } from './product/create-product.component';
import { CartComponent } from './cart/cart.component';
import{WelcomeComponent} from'./welcome/welcome.component';


const routes: Routes = [
  { path: 'welcome', component:WelcomeComponent },
  { path: 'list', component:ListproductsComponent },
  { path: 'create', component: CreateProductComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
