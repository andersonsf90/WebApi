import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const appRoutes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: '', loadChildren: '../app/home/home.module#HomeModule'},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports : [
        RouterModule,
    ],
})
export class AppRoutingModule {}
