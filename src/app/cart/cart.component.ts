import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product.model';
import { Item } from '../model/item.model';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

 export  class CartComponent implements OnInit{

  items:Item[]=[];
  total:number=0;

  constructor(private service:ProductService){}

  ngOnInit(): void{

    this.loadCart();
  }
  
  loadCart() : void {

    this.items = [];
    this.total = 0;
  
    let dataSourse = localStorage.getItem('cartData') || null; 

    if(dataSourse != null) {

      let cartData = JSON.parse(dataSourse);

    console.log(cartData);

      for(let i = 0; i < cartData.length; ++i) {
        let product= this.service.getProduct( JSON.parse(cartData[i]).id ) ;
        let q: number = JSON.parse(cartData[i]).qty; 
        let item = new Item(product, q);    
        this.items.push(item);
      }
    } 
  }

  getTotal() {

     return this.items.reduce( (a, b) => a + b.product.price * b.quantity, 0 ).toFixed(2)
 }

 onchange(i: number, value: number) {
   this.items[i].quantity = value;
 }

  remove(idx : number): void {
   

    let dataSourse = localStorage.getItem('cartData') || null; 

    if(dataSourse != null) {
      let cartData = JSON.parse(dataSourse);
      
      cartData.splice(idx, 1);
      localStorage.setItem(  'cartData', JSON.stringify(cartData));
    }

    this.loadCart();
  }
  
  recalculate(id: number, quantity: number): void {
    let dataSourse = localStorage.getItem('cartData') || null;

    if (dataSourse != null) {
      let cartData = JSON.parse(dataSourse);
      for (let i = 0; i < cartData.length; i++) {
        let obj = JSON.parse(cartData[i]);

        if (obj.id == id) {
          obj.qty = quantity;
          cartData[i] = JSON.stringify(obj);
          localStorage.setItem('cartData', JSON.stringify(cartData));
        }
      }
    }
    this.loadCart();
  }

 }
   
 

