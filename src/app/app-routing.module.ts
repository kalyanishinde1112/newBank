import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';
import { SocietyFormComponent } from './shared/society-form/society-form.component';
import { SocietyListComponent } from './shared/society-list/society-list.component';
import { BranchFormComponent } from './shared/branch-form/branch-form.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'society', component: SocietyFormComponent},
  {path: 'society-list', component: SocietyListComponent},

  {
path:'branch',component:BranchFormComponent
  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
