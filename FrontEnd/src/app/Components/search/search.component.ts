import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PriceServiceService } from 'src/app/services/price-service.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  

error = false
currentPage: number = 1;
next = true;
user = false;
products: any = []

displayedProducts: any = [];
itemsPerPage: number = 3;

constructor(private router: Router, 
  private productservice: ProductService, private priceservice:PriceServiceService) { 
        
  
  
  
 
}
ngOnInit() {

  // if (localStorage.getItem("logged") == "true") {
  //   this.user = true;
  // }
  const state = history.state;
  console.log("finalPrice:"+state.finalPrice)
  if (state.products) {
    this.products = state.products;
    this.displayedProducts = this.products.slice(0, this.itemsPerPage);
  }
   else if (state.minPrice && state.finalPrice>=0) {
    const minPrice = state.minPrice;
    const maxPrice = state.finalPrice;
    console.log("minprice"+minPrice+"maxPrice"+maxPrice)
    this.searchProducts(minPrice, maxPrice);
  }
}

searchProducts(minPrice: number,maxPrice: number ) {
  this.productservice.getProductByPrice(minPrice, maxPrice).subscribe((result) => {
    if (result) {
      this.products = result;
      this.displayedProducts = this.products.slice(0, this.itemsPerPage);
    } else {
      this.displayedProducts = [];
    }
  });
}

loadMore() {


  const startIndex = (this.currentPage) * this.itemsPerPage;

  const endIndex = startIndex + this.itemsPerPage;
  console.log("startIndex" + startIndex);
  console.log("endIndex" + endIndex);
  if (endIndex <= (this.products.length + 2)) {
    this.displayedProducts = this.products.slice(startIndex, endIndex);
    this.currentPage++;
    if (this.products.length <= endIndex) {
      this.next = false;
    }
    else {
      this.next = true;
    }

  }
  else {
    this.next = false;
  }

}

previousPage() {
  if (this.currentPage > 1) {
    this.next = true;
    this.currentPage--;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedProducts = this.products.slice(startIndex, endIndex);
  }
}


details(productCode: any) {
  // if (this.user) {
    this.router.navigate(['/productdetails/' + productCode]);
  // }
  // else {
    // this.router.navigate(['/login']);
  // }
   
}   

}

