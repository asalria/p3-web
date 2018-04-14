import { UsersService } from './shared/services/user.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/misc/nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { SessionService } from './shared/services/session.service';
import { routes } from './app.routes';
import { LoginComponent } from './components/misc/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { ModalComponent } from './components/misc/modal/modal.component';
import { ProfileComponent } from './components/profile/show/profile.component';
import { EditComponent } from './components/profile/edit/edit.component';
import { CreateComponent } from './components/routes/create/create.component';
import { ViewComponent } from './components/routes/view/view.component';
import { ListComponent } from './components/routes/list/list.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MessagesComponent,
    SignupComponent,
    ModalComponent,
    ProfileComponent,
    EditComponent,
    CreateComponent,
    ViewComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    Angular2FontawesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD0LLQ7FV-9sLdzoWQj7IEiMcmTSUJqCcU'
    })
  ],
  providers: [
    SessionService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
