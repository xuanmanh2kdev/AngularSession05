import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzSelectModule} from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
const SHARED_MODULE: any[] = [
  CommonModule,
  ReactiveFormsModule,
  NzTableModule,
  NzPaginationModule,
  NzGridModule,
  NzInputModule,
  NzButtonModule,
  FormsModule,
  NzMenuModule,
  NzLayoutModule,
  NzBreadCrumbModule,
  NzIconModule,
  NzFormModule,
  NzRadioModule,
  NzDatePickerModule,
  NzMessageModule,
  NzSpaceModule,
  NzSelectModule,
  NzSpinModule,
  NzCheckboxModule
]

@NgModule({
  declarations: [],
  imports: [
    ...SHARED_MODULE
  ],
  exports: [
    ...SHARED_MODULE
  ]
})
export class SharedModule { }
