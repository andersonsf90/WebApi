import { RegisterModule } from './register/register.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserService } from '@/_services/user.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';



@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,

        HomeModule,
        LoginModule,
        RegisterModule,

        AppRoutingModule,
    ],
    declarations: [
        AppComponent,

    ],
    providers: [
        UserService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
