import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
     error=false
     message=""
     matched:any
    Login=new FormGroup({
       email:new FormControl("",[Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')]),
       password:new FormControl("",Validators.required)
     });
     get password(){
         return this.Login.get('password')
     }
     get email(){
         return this.Login.get('email')
     }

  constructor(private router:Router,private userservice:UserservicesService){}
    login(){
       const pass=this.Login.value.password
         this.userservice.getuser(this.Login.value.email).subscribe((result)=>{
            this.matched=result;
                 if(result!==null&&this.matched.password === pass){
                     localStorage.setItem("logged","true");
                    console.log(result)
                    console.log(result + ' ' + typeof(result))
                    this.userservice.isAuthenticate = true;
                    const userData = result
                    localStorage.setItem('userData', JSON.stringify(userData));
                     this.router.navigate([''])
                 }
                 else{
                      this.error=true
                      this.message="Wrong Creditinal"
                 }
         })
    }
}
