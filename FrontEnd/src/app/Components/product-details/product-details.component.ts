import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  products: any
 
  yes=false;
  no=false;
  days:any;
  singleProduct:any;
  constructor(private router:Router,private productservice:ProductService,private activerouter:ActivatedRoute){
    this.productservice.getProductByProductCode(this.activerouter.snapshot.params['productCode']).subscribe((result:any) => {
      this.products = result
      console.log("productdetails:"+this.products.productCode);
    })
  }
  ngOnInit(){
  }

  back(){
      this.router.navigate([""])
  }
  pincode=new FormGroup({
    Pincode: new FormControl('', Validators.required)
  })
  Pcode(){
    this.yes=false
    this.no=false
    const pin=this.pincode.value.Pincode
    if(pin){
    this.productservice.getProductByProductCodeAndPinCode(this.activerouter.snapshot.params['productCode'], pin).
      subscribe((result) => {
       
        this.singleProduct=result
       
      
      if(this.singleProduct!=null){
        this.yes=true;
       
        this.days=this.singleProduct.estimatedays;
        
      }
      else{
        this.no=true;
      }
  
      })    

  }
}

}
