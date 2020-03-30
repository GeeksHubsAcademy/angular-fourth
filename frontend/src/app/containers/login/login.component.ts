import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: any = {
    username: '',
    password: '',
  }
  public errorMsg: string;
  public successMsg: string;
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }
  login(event) {
    event.preventDefault();
    console.log(this.user)
    this.userService.login(this.user)
      .subscribe(
        (res: HttpResponse<any>) => {
          //en redirectRoute guardamos la ruta a redirigir en función de si el usuario que se ha conectado es admin o no
          const redirectRoute = res['user']['role']==='admin' ? '/admin':'/';
          this.successMsg=res['message'];
          setTimeout(() => this.router.navigate([redirectRoute]) , 2500);
        },
        (error: HttpErrorResponse) => {
          this.errorMsg = error.error.message;
          setTimeout(() => this.errorMsg ="", 2500);
        }
      )
  }
}
