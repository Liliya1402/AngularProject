
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListproductsComponent } from './product/listproducts/listproducts.component';
import { CreateProductComponent } from './product/create-product.component';
import { CartComponent } from './cart/cart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
   AppComponent,
    ListproductsComponent,
    CreateProductComponent,
    CartComponent,
    WelcomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     CommonModule,
     RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
