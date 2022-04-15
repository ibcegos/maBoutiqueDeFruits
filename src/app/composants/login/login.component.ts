import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pseudo = "Rashito";
  password = "12345";
  message = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm:any) {

      if (loginForm.value.pseudo == this.pseudo && loginForm.value.password == this.password ) {
        this.router.navigate(["product"]);
      } else {
        this.message = true;
      }
  }

}
