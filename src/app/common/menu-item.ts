import {RoleEnum} from "./role";

export const MENU_ITEMS = [
  {
    name: 'Events',
    roles: [RoleEnum.ROLE_ADMIN, RoleEnum.ROLE_CUSTOMER],
    router: '/app/events',
  },
  {
    name: 'Customer',
    roles: [RoleEnum.ROLE_ADMIN],
    router: '/app/customers'
  }
]
