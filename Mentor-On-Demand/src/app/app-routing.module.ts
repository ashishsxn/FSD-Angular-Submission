import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { SignupMentorComponent } from './signup-mentor/signup-mentor.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { TrainermenuComponent } from './trainermenu/trainermenu.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-menu', component: AdminMenuComponent },
  { path: 'signup-user', component: SignupUserComponent },
  { path: 'signup-mentor', component: SignupMentorComponent },
  { path: 'search-result', component: SearchResultComponent },
  {
    path: 'user-menu', component: UsermenuComponent
  },
  {
    path: 'trainer-menu', component: TrainermenuComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginComponent, PageNotFoundComponent, SignupMentorComponent, SignupUserComponent, UsermenuComponent,SearchResultComponent,AdminComponent, AdminMenuComponent ]