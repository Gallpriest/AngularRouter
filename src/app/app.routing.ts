import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {FeaturesComponent} from './features/features.component';
import {ChildComponent} from './child/child.component';
import {UserComponent} from './users/users/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: 'child', component: ChildComponent }] },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'features', component: FeaturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouter {}
