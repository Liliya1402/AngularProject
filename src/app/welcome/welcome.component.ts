import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../../app/services/product.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

 
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  invalidLogin: boolean = false;

  constructor(
    private http: HttpClient,
    private service: ProductService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }
  
  login(form: NgForm ) {
  // console .log("login called");
  const credentials = JSON.stringify(form.value);
  console.log(JSON.stringify(form.value));

  const url = 'https://localhost:5001/Auth/login';
  
  this.http.post("https://localhost:5001/Auth/login", credentials, {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }).subscribe(response => {
    const token = (<any>response).token;
    localStorage.setItem("jwt", token);
    this.invalidLogin = false;
    this.service.invalidLogin = false;

    this.router.navigate(["/list"]);
  }, err => {
    this.invalidLogin = true;
    this.service.invalidLogin = true;
    
  });
}
}


  
    


  



