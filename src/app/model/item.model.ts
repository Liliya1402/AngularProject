import {Product} from '../model/product.model';

export class Item {
    product: Product ;
    quantity: number;
  
    constructor(pro: Product, qty: number) {
        this.product= pro;
        this.quantity = qty;
       
    }
}