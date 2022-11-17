import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/users?page=1', pathMatch: 'full' },

  { path: 'users', component: HomeComponent },
  { path: 'user/new', component: NewComponent },
  { path: 'user/:id', component: UserComponent },

  { path: '**', redirectTo: '/users?page=1', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
