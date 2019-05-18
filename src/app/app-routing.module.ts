import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user/:userId', component:  UserComponent},
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
