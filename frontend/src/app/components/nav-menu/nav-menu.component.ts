import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  // isExpanded = false;

  // collapse() {
  //   this.isExpanded = false;
  // }

  // toggle() {
  //   this.isExpanded = !this.isExpanded;
  // }

  items: MenuItem[] = [
    { label: 'Home', routerLink: '/'},
    { label: 'Todo List', routerLink: 'todo-list'}
  ];
}
