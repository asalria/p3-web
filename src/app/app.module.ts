import { MessageViewComponent } from './components/messages/view/view.component';
import { MessageListComponent } from './components/messages/list/list.component';
import { MessageService } from './shared/services/message.service';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { RoutesService } from './shared/services/routes.service';
import { UsersService } from './shared/services/user.service';
import {NgbModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/misc/nav-bar/nav-bar.component';
import { MessageModalComponent } from './components/messages/create/create.component';
import { AppComponent } from './app.component';
import { SearchService } from './shared/services/search.service';
import { SessionService } from './shared/services/session.service';
import { routes } from './app.routes';
import { SignupComponent } from './components/misc/signup/signup.component';
import { ModalComponent } from './components/misc/modal/modal.component';
import { ProfileComponent } from './components/profile/show/profile.component';
import { EditComponent } from './components/profile/edit/edit.component';
import { CreateComponent } from './components/routes/create/create.component';
import { ViewComponent } from './components/routes/view/view.component';
import { ListComponent } from './components/routes/list/list.component';

import { AgmCoreModule } from '@agm/core';
import { StarRatingModule } from 'angular-star-rating';
import { UserroutesComponent } from './components/routes/userroutes/userroutes.component';
import { DeleteRouteComponent } from './components/routes/delete/delete.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    ModalComponent,
    ProfileComponent,
    EditComponent,
    CreateComponent,
    ViewComponent,
    ListComponent,
    MessageModalComponent,
    MessageListComponent,
    UserroutesComponent,
    DeleteRouteComponent,
    MessageViewComponent
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
    }),
    StarRatingModule.forRoot(),
    NgbCollapseModule
  ],
  providers: [
    SessionService,
    UsersService,
    RoutesService,
    MessageService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
