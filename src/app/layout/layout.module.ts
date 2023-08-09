import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateLayoutComponent } from './private-layout/private-layout.component';
import {SharedModule} from "../shared/shared.module";
import {RouterLink, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    PrivateLayoutComponent
  ],
    imports: [
        SharedModule,
        RouterOutlet,
        RouterLink
    ]
})
export class LayoutModule { }
