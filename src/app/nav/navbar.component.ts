import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm: string = "";
  foundSessions: ISession[];

  //Typically, constructor fields are set to private, but here it is public.
  //This is done so that the HTML template can access the field.
  constructor(public authService: AuthService,
              private eventService: EventService) {

              }

  searchSessions(searchTerm: string): void{
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      }
    )
  }

  ngOnInit(): void {
  }

}
