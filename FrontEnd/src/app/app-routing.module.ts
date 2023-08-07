import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SearchComponent } from './Components/search/search.component';
import { AuthGuard } from './guards/auth-guard.guard';
const routes: Routes = [
  {
    component:LoginComponent,
    path:"login"
    

  },
  {
    component:RegisterComponent,
    path:"register"
    
  },
  {
     component:HomeComponentComponent,
     path:""
  },
  {
      component:ProductDetailsComponent,
      path:"productdetails/:productCode",
      canActivate: [AuthGuard]
      
  },
  {
       component:SearchComponent,
       path:"product-search",
       canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
