import { Routes } from '@angular/router';

import {EventsListComponent,
        EventDetailsComponent,
        CreateEventComponent,
        EventRouteActivatorService,
        EventsListResolverService} from './events/index';
import { Four0fourComponent } from './errors/four0four.component';

export const appRoutes: Routes = [
  //resolve makes it so that before resolving this route, call the EventsListResolverService.
  //When that EventsListResolverService finishes and returns data, add the data to the route as a property named "events".
  { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService}},
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: 'events/new', component: CreateEventComponent },
  //canActivate will take in the "id" property and see if an object exists with that id.
  //If it doesn't, it will redirect the user to a 404 page.
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', component: Four0fourComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
