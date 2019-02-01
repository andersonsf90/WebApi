import { Component } from '@angular/core';
import { HomeComponent } from './home.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html'
})
export class TopBarComponent {

    constructor(public homeComponent: HomeComponent) { }

}
