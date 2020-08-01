import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'ships', loadChildren: () => import(`./components/ships/ships.module`).then(m => m.ShipsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
