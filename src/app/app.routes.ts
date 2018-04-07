import { EditComponent } from './components/profile/edit/edit.component';
import { ProfileComponent } from './components/profile/show/profile.component';
import { LoginComponent } from './components/misc/login/login.component';
import { RoutesComponent } from './components/routes/routes.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'routes', pathMatch: 'full'},
    { path: 'routes', component: RoutesComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent},
    { path: 'profile/edit', component: EditComponent},
    { path: 'profile/:id', component: ProfileComponent}


];

