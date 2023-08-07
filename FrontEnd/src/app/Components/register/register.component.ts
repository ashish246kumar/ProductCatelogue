import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error=false;
  message=""
  Registration = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')]),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmpassword: new FormControl('', Validators.required)
  });
  get email() { return this.Registration.get('email') }
  get firstname() { return this.Registration.get('firstname') }
  get lastname() { return this.Registration.get('lastname') }
  get password() { return this.Registration.get('password') }
  get confirmpassword() { return this.Registration.get('confirmpassword') }

constructor(private router:Router,private userservice:UserservicesService){}
     
  register(){
          
    const password=this.Registration.value.password
    const confirmPassword=this.Registration.value.confirmpassword
    if(password===confirmPassword){
       
       this.userservice.getuser(this.Registration.value.email).subscribe((result)=>{
              if(result==null){

                const user = {
                  email: this.Registration.value.email,
                  firstname: this.Registration.value.firstname,
                  lastname: this.Registration.value.lastname,
                  password: this.Registration.value.password
                };
                   this.userservice.addUser(user).subscribe(()=>{
                       this.router.navigate(['login']);
                   })
              }
              else{
                this.error=true
                this.message="UsearAlreadyExist"
              }

       })
   }
   else{
          this.error=true
          this.message="Passowrd and Confirm Password not matched"
   }
  }


}