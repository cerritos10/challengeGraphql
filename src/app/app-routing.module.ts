import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './dashboard/body/body.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/dashboard",
    pathMatch:"full",
  },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'body', component: BodyComponent },
  { path: 'dashboard', component: DashComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
