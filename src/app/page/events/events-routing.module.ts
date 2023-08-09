import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import {EventDetailComponent} from "./event-detail/event-detail.component";
import {EventFormComponent} from "./event-form/event-form.component";

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'list', component: EventsComponent },
  { path: 'detail/:id', component: EventDetailComponent },
  { path: 'add', component: EventFormComponent },
  { path: 'update/:id', component: EventFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
