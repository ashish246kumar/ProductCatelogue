import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { PriceServiceService } from '../services/price-service.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  
  
        constructor(private router:Router,private productService:ProductService){
                 
        }
  

  searchTerm: string = '';
  searchResults: any; 
  performSearch() {
    
    
          // if(localStorage.getItem("logged")=="false"){
          //   this.router.navigate(['/login'])

          // }
  // else{
    this.productService.getfilteredProduct(this.searchTerm).subscribe(
      (response) => {
        this.router.navigate(["product-search"], { state: { products: response } });
        this.searchResults = response;
        console.log('Search results:', this.searchResults);
      },
      (error) => {
        console.error('Error occurred during search:', error);
      }
    );
  }
  }
  
// }













