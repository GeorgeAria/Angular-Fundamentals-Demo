import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent} from './events/index';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Four0fourComponent } from './errors/four0four.component';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Four0fourComponent,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
