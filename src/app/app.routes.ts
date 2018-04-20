import { DeleteRouteComponent } from './components/routes/delete/delete.component';
import { UserroutesComponent } from './components/routes/userroutes/userroutes.component';
import { MessageListComponent } from './components/messages/list/list.component';
import { ListComponent } from './components/routes/list/list.component';
import { EditComponent } from './components/profile/edit/edit.component';
import { ProfileComponent } from './components/profile/show/profile.component';
import { CreateComponent } from './components/routes/create/create.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { ViewComponent } from './components/routes/view/view.component';
import { Routes } from '@angular/router';
import { IsAuthorGuard } from './guards/is-author.guard';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'routes', pathMatch: 'full'},
    { path: 'routes', component: ListComponent},
    { path: 'routes/new', component: CreateComponent},
    { path: 'routes/user/:id', component: UserroutesComponent},
    { path: 'routes/delete/:id', component: DeleteRouteComponent},
    { path: 'routes/:id', component: ViewComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent},
    { path: 'messages', component: MessageListComponent},
    { path: 'profile/edit/:id', component: EditComponent},
    { path: 'profile/:id', component: ProfileComponent}


];

