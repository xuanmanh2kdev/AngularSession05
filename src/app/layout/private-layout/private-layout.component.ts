import { Component } from '@angular/core';
import {MENU_ITEMS} from "../../common/menu-item";
import {RoleEnum} from "../../common/role";

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls: ['./private-layout.component.scss']
})
export class PrivateLayoutComponent {
  MENU_ITEMS = MENU_ITEMS
    .filter(item => item.roles.length === 0
      || item.roles.includes(localStorage.getItem('role') as RoleEnum));
}
