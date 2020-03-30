import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  public errorMsg:string;
  public successMsg:string;
  constructor() { }

  ngOnInit(): void {
  }
  register(registerForm){
    console.log(registerForm)
    if(registerForm.valid){
      console.log(registerForm.value)
    }
  }
}
