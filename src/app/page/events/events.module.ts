import {NgModule} from '@angular/core';

import {EventsRoutingModule} from './events-routing.module';
import {EventsComponent} from './events.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {SharedModule} from "../../shared/shared.module";
import { EventFormComponent } from './event-form/event-form.component';


@NgModule({
  declarations: [
    EventsComponent,
    EventDetailComponent,
    EventFormComponent
  ],
  imports: [
    SharedModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
