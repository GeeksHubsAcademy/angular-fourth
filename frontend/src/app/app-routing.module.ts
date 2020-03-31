import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { RegistroComponent } from './containers/registro/registro.component';
import { ProductsComponent } from './containers/products/products.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegistroComponent},
  {path:'',component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
