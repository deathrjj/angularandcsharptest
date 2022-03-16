import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './pages/counter/counter.component';
import { FetchDataComponent } from './pages/fetch-data/fetch-data.component';
import { TestComponent } from './pages/test/test.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';

// Page routes. Add here for a new page.
const routes: Routes = [
  // Home page
  { path: '', component: HomeComponent, pathMatch: 'full' },

  // Counter page
  { path: 'counter', component: CounterComponent },

  // Fetch Data page
  { path: 'fetch-data', component: FetchDataComponent },

  // Test page
  { path: 'test', component: TestComponent },
  
  // Todo List page
  { path: 'todo-list', component: TodoListComponent },

  //Calculator Page
  { path: 'calculator', component: CalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
