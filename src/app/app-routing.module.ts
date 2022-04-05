import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '', 
    loadChildren: () => import(`./modules/homepage/homepage.module`).then(module => module.HomepageModule)
  },
  {
    path: 'login',
    loadChildren: () => import(`./modules/auth/auth.module`).then(module => module.AuthModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
