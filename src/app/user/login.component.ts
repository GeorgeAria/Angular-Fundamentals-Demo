import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  username: string;
  password: string;
  mouseoverLogin: boolean;

  login(formValues: any): void{
    this.authService.loginUser(formValues.username, formValues.password);
    this.router.navigate(['events']);
  }

  cancel(): void{
    this.router.navigate(['events']);
  }

  ngOnInit(): void {
  }

}
