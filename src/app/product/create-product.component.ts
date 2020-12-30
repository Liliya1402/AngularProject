import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Product} from '../model/product.model';
import { ProductService } from '../../app/services/product.service';
import { Router } from "@angular/router";

@Component({
 //selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'
  ]
})
export class CreateProductComponent implements OnInit {

  product: Product  = new Product(0, '', 0, '','');
  previewPhoto  = false;
  massage: String = "";

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto; 
  }
  constructor(
    private service: ProductService,
    private router:Router
  ){}
  ngOnInit(): void { 
  }
  saveProduct(proForm: NgForm) {

    var newProduct = new Product(
      0, 
      proForm.value.name,
      proForm.value.price,
      proForm.value.photoPath,
      proForm.value.description
    );
    
    

    this.service.post(newProduct).subscribe(
      () => {
        this.massage = 'Data Saved Successfully';
      }
    );
    
    this.router.navigate(['/list'])
   
  }
}