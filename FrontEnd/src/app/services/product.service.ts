import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://13.48.67.180:8081";
   private urls="http://13.48.67.180:8081/searchproduct";
   
  constructor(private http: HttpClient) { }
     getproducts(){
       return this.http.get(this.url + "/product")
     }
    
     getProductByProductCode(code:string){
      return  this.http.get<any[]>(this.urls, { params: { productCode: code } })
     }
     

     
    getProductByPrice(minPrice: number, maxPrice: number): Observable<any[]> {

      if(maxPrice==0){
         var link = `${this.url}/search-product?minPrice=${minPrice}`;
      }
      else{
          link = `${this.url}/search-product?minPrice=${minPrice}&maxPrice=${maxPrice}`;
      }
      
      return this.http.get<any[]>(link);
    }
     getProductByProductCodeAndPinCode(productCode:string,pincode:string){
      return this.http.get(this.urls +"/"+productCode+"/"+pincode)
     }
     
     
    getfilteredProduct(searchTerm: string){
      var link=`${this.url}/search-products?keyword=${searchTerm}`; 
      console.log("link:"+link); 
      return this.http.get<any[]>(link);
    }
    

    
     
}
