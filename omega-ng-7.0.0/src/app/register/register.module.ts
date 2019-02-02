import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule, ButtonModule, ConfirmDialogModule, ConfirmationService, PasswordModule } from 'primeng/primeng';

import { UserService } from './../_services/user.service';
import { AuthGuard } from './../_guards/auth.guard';

import { AuthenticationService } from '@/_services/authentication.service';
import { RegisterComponent } from './register.component';


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
    RegisterComponent
],
exports: [
    RegisterComponent
  ],
  providers: [
    ConfirmationService,

    AuthGuard,
    AuthenticationService,
    UserService,
  ]
})
export class RegisterModule { }
