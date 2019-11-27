import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { SignupMentorComponent } from './signup-mentor/signup-mentor.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { LoginprocessService } from './loginprocess.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultComponent } from './search-result/search-result.component';
import { TrainermenuComponent } from './trainermenu/trainermenu.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,   
    FooterComponent,
    routingComponents,
    PageNotFoundComponent,
    SignupUserComponent,
    SignupMentorComponent,
    UsermenuComponent,
    SearchResultComponent,
    TrainermenuComponent,
    AdminComponent,
    AdminMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LoginprocessService],
  bootstrap: [AppComponent]
})

export class AppModule { }
