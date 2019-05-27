import { Component, OnInit } from '@angular/core';

const menuItems = [
  {
    id: 1,
    name: 'Home',
    href: '/'
  },
  {
    id: 2,
    name: 'Users',
    href: 'users'
  },
  {
    id: 3,
    name: 'Features',
    href: 'features'
  },
  {
    id: 4,
    name: 'Child',
    href: 'users/child'
  }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu = menuItems;
  constructor() { }

  ngOnInit() {
  }

}


