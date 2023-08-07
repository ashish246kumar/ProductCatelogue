import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  
  private url = "http://13.48.67.180:8081/";
  
  isAuthenticate = false;

  constructor(private http: HttpClient) { }
     
  
  addUser(User:any){
    return this.http.post(this.url+"user",User)
  }
  getuser(email:any){
      return this.http.get(this.url+"user/"+email)
  }

  isAuthenticated(): boolean {
    return this.isAuthenticate;
  }
  
}

