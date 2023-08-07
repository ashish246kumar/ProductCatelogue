import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PriceServiceService } from 'src/app/services/price-service.service';
import { ProductService } from 'src/app/services/product.service';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user = false;
  error=false;
  selectedRangeControl = new FormControl('');
  products:any[] = [];
  username:string='';
  constructor(private router: Router, private priceservice: PriceServiceService, private productService:ProductService, private userService:UserservicesService) {
    
   }
  ngOnInit() {
    if (localStorage.getItem("logged") == "true") {
      this.user = true;
    }
  }

  onRangeChange() {
    const selectedRange = this.selectedRangeControl.value;
    console.log("selctedRange:"+selectedRange)
    if (selectedRange) {
      const [minPrice, maxPrice] = selectedRange.split('-').map(value => value === '+' ? null : parseInt(value, 10));
      const finalPrice= maxPrice ?? 0;
       console.log("minPrice"+finalPrice)
       
      
       
        this.router.navigate(['product-search'], { state: { minPrice, finalPrice } });
       
        
    }

    else{
      
      window.location.reload();
       
    }
  }
  
  back() {
    return this.router.navigate([""]);
   
   
  }

  isCurrentUrl(url: string): boolean {
    return this.router.url == url;
  }
 


  ProductSearch() {
    this.router.navigate(['/product-search']);
  }
  logout() {

    localStorage.setItem("logged", "false")
    this.userService.isAuthenticate = false;
    // Remove user data from local storage
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
    
  }
  login() {
    this.router.navigate(['/login']);
  }
  register(){
    
    this.router.navigate(['/register']);
  }
}
