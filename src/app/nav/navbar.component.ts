import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //Typically, constructor fields are set to private, but here it is public.
  //This is done so that the HTML template can access the field.
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
