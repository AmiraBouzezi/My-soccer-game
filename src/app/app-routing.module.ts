import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
   {path:'addAdmin',component:AddAdminComponent},
  {path:'addPlayer',component:AddPlayerComponent},
  {path:'addMatch',component:AddMatchComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboardAdmin',component:DashboardAdminComponent},
  {path:'displayMatch/:id',component:DisplayMatchComponent},
  {path:'editMatch/:id',component:AddMatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
