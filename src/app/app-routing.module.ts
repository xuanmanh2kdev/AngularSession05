import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrivateLayoutComponent} from "./layout/private-layout/private-layout.component";
import {authenticationGuard} from "./guard/authentication.guard";

const routes: Routes = [
  {
    path: 'app',
    canActivate: [authenticationGuard],
    component: PrivateLayoutComponent,
    children: [
      { path: 'events', loadChildren: () => import('./page/events/events.module').then(m => m.EventsModule) },
      { path: 'customers', loadChildren: () => import('./page/customers/customers.module').then(m => m.CustomersModule) }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
