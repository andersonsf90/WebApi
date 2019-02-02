import { RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {LocationStrategy, HashLocationStrategy, CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { TopBarComponent } from './topbar.component';

import { HomeComponent } from './home.component';
import { ErrorInterceptor } from './../_helpers/error.interceptor';
import { JwtInterceptor } from './../_helpers/jwt.interceptor';
import { MenuComponent, SubMenuComponent } from './menu.component';


@NgModule({
    imports: [
        CommonModule,

        FormsModule,
        RouterModule,

        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        ScrollPanelModule,

    ],
    declarations: [
        HomeComponent,
        MenuComponent,
        SubMenuComponent,
        TopBarComponent,
    ],
    exports: [
        HomeComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        {provide: LocationStrategy, useClass: HashLocationStrategy},

    ],

})
export class HomeModule { }
