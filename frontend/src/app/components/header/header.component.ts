import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  public admins =['superAdmin','admin','dios'];
  constructor(
    public userService:UserService,
    public productService:ProductService
    ) { }

  searchProducts(event:any){
   const searchValue= event.target.searchInput.value;
   if(!searchValue){
    return this.productService.getAll()
    .subscribe(
      res=>this.productService.setProducts(res)
    )
   }
    this.productService.search(searchValue)
    .subscribe(
      res=>this.productService.setProducts(res)
    )
  }
}
