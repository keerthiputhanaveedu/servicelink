import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Nav1Component } from './nav1/nav1.component';
import { Nav2Component } from './nav2/nav2.component';
import { Nav3Component } from './nav3/nav3.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "/nav1",
    pathMatch: 'full'
  },
  {
    path: 'nav1',
    component: Nav1Component,
    data: { title: 'Nav1', help_id: '#' }
  },
  {
    path: 'nav2',
    component: Nav2Component,
    data: { title: 'Nav2', help_id: '#' }
  },
  {
    path: 'nav3',
    component: Nav3Component,
    data: { title: 'Nav3', help_id: '#' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
