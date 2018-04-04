import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/misc/nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { SessionService } from './shared/services/session.service';
import { routes } from './app.routes';
import { LoginComponent } from './components/misc/login/login.component';
import { RoutesComponent } from './components/routes/routes.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SignupComponent } from './components/misc/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RoutesComponent,
    MessagesComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
