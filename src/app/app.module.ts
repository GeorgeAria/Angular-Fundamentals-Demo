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
import { SessionListComponent } from './events/event-details/session-list.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent } from './common/index';
import { SimpleModalComponent } from './common/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Four0fourComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
