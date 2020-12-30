import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { Router } from "@angular/router";
@Component({
 // selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
   export class ListproductsComponent implements OnInit {
 
  products?:Product[] ;

  constructor(private service:ProductService,
    private router: Router,
    ) { }

   ngOnInit(): void {
      // this.products =this.service.getProducts();

    this.service.get()
    .subscribe(
      (data: Product[]) => {
        this.products= data;
      }
      );
    }

  

  addCartData(id?: number, qty?: number) : void {
    let itemExists = false;
    let cartData = localStorage.getItem( 'cartData' ) || '[]';
    let json = JSON.parse(cartData);
    
    for (let i = 0; i < json.length; i++) {
      let cartItemObject = JSON.parse(json[i]);
      if (cartItemObject.id == id) {
        let newQ = cartItemObject.qty + qty;
        cartItemObject.qty = newQ;
        itemExists = true;
        json[i] = JSON.stringify(cartItemObject);
      }
    }
    if (!itemExists) {

    json.push( JSON.stringify( {'id': id, 'qty': qty } ) );
    }
    localStorage.setItem(  'cartData', JSON.stringify(json) );

   // console.log( localStorage.getItem('cartData') );
  }

  clearCartData() : void {
    localStorage.setItem( 'cartData', '' );
    console.log( localStorage.getItem('cartData') );
  }

  
  getProducts() {
    this.service.get().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    });    
  }

  getAll () {
    return this.products;
  }

  remove(id: number) {
    const index = this.products?.findIndex(c => c.id == id) || -1;
    if (index > -1) {
      this.products?.splice(+index, 1);
    }
    this.service.delete(id)
  }

  ifLogin() {
    return !this.service.invalidLogin;
  }

  }

