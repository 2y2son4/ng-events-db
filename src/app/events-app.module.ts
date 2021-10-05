import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar-component';

import { ToastrService } from './commons/toastr.service';

import { appRoutes } from './routes';

@NgModule({
  // Use for importing other modules
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],

  // To add a component, pipe or directive, it must be firstly declared:
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent
  ],

  // Services are added as providers
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
