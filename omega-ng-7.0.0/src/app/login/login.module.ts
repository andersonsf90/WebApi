import { AuthGuard } from './../_guards/auth.guard';
import { UserService } from '@/_services/user.service';
import { AuthenticationService } from '@/_services/authentication.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule, ButtonModule, ConfirmDialogModule, ConfirmationService, PasswordModule } from 'primeng/primeng';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    HttpModule,

    PasswordModule,
    InputTextModule,
    ConfirmDialogModule,


  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    ConfirmationService,

    AuthGuard,
    AuthenticationService,
    UserService,
  ]
})
export class LoginModule { }
