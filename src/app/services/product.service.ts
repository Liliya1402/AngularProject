import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];
  private API_SERVER = 'https://localhost:5001/Product';
  invalidLogin: boolean = true;
  private status = "";
  constructor(private http: HttpClient) { }

  get() : Observable<Product[]> {

    return this.http.get<Product[]>(this.API_SERVER);
    
  }

  getById(id: number) : Observable<Product> {
    return this.http.get<Product>(this.API_SERVER + '/'+ id);
  }

  getProduct(id: number) : Product {
    
    let res: Product= new Product(0, '', 0, '','');
    //debugger;
    this.getById(id).subscribe(
      (data: Product) => {
        res.id = data.id;
        res.name = data.name;
        res.price = data.price;
        res.photoPath = data.photoPath;
        res.description=data.description
      }

    );

    return res;
  }



  /* constructor() { 
      this.products = [
      {
        id: 1,
        name: 'Dress1',
        price: 111.15,
        photoPath: 'assets/images/dress1.jpg',
        description:'This is for all the latest trends, no matter who you are'
      },
      {
        id: 2,
        name: 'Dress2',
        price: 18.9,
        photoPath: 'assets/images/dress2.jpg',
        description:'This is for all the latest trends, no matter who you are'
      },
      {
        id: 3,
        name: 'Dress3',
        price: 14.9,
        photoPath: 'assets/images/dress3.jpg',
        description:'This is for all the latest trends, no matter who you are'
      },
      {
        id: 4,
        name: 'Dress4',
        price: 25.9,
        photoPath: 'assets/images/dress4.jpg',
        description:'This is for all the latest trends, no matter who you are'
      },

   {
        id: 5,
        name: 'Dress5',
        price: 10.9,
        photoPath: 'assets/images/dress5.jpg',
        description:'This is for all the latest trends, no matter who you are'
       
      },
      {
        id: 6,
        name: 'Dress6',
        price: 49.9,
        photoPath: 'assets/images/cartierorange.jpg',
        description:'This is for all the latest trends, no matter who you are'
      },
    ];
  }  */

  post(mi: Product) : Observable<Product>  {
    const httpHeaders = { headers:new HttpHeaders({'Content-Type': 'application/json'}) };

    return this.http
      .post<Product>(this.API_SERVER, JSON.stringify(mi), httpHeaders);
  }

  delete(id: number) {
    this.http.delete(this.API_SERVER + '/' + id)
        .subscribe(() => this.status = 'Delete successful');

     return this.status;   
  }




  getProducts(): Product[] {
    
    return this.products;
  }
  
  private getSelectedIndex(id: number) {
    for(var i = 0; this.getProducts.length; ++i) {
      
      if(this.products[i].id == id) {
        return i;
      }
    }

    return -1;
  }


  addProduct(pro:Product) {
    
    this.products.push(pro);
  }
}