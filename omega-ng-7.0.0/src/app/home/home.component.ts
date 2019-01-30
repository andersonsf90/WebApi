import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import {
    Component,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    Renderer2,
    OnInit
} from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';
import { ScrollPanel } from 'primeng/primeng';

import { Router } from '@angular/router';
import { User } from '@/_models';
import { AuthenticationService, UserService } from '@/_services';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    animations: [
        trigger('submenu', [
            state(
                'hidden',
                style({
                    height: '0px'
                })
            ),
            state(
                'visible',
                style({
                    height: '*'
                })
            ),
            transition(
                'visible => hidden',
                animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
            ),
            transition(
                'hidden => visible',
                animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
            )
        ])
    ]
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    currentUser: User;

    public menuInactiveDesktop: boolean;

    public menuActiveMobile: boolean;

    public profileActive: boolean;

    public topMenuActive: boolean;

    public topMenuLeaving: boolean;

    @ViewChild('scroller') public scrollerViewChild: ScrollPanel;

    documentClickListener: Function;

    menuClick: boolean;

    topMenuButtonClick: boolean;

    currentUserSubscription: Subscription;
    users: User[] = [];

    constructor(
        public renderer: Renderer2,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.authenticationService.currentUser.subscribe(
            x => (this.currentUser = x)
        );

        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        document.body.className = '';
        this.loadAllUsers();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.scrollerViewChild.moveBar();
        }, 100);

        // hides the overlay menu and top menu if outside is clicked
        this.documentClickListener = this.renderer.listen(
            'body',
            'click',
            event => {
                if (!this.isDesktop()) {
                    if (!this.menuClick) {
                        this.menuActiveMobile = false;
                    }

                    if (!this.topMenuButtonClick) {
                        this.hideTopMenu();
                    }
                }

                this.menuClick = false;
                this.topMenuButtonClick = false;
            }
        );
    }

    toggleMenu(event: Event) {
        this.menuClick = true;
        if (this.isDesktop()) {
            this.menuInactiveDesktop = !this.menuInactiveDesktop;
            if (this.menuInactiveDesktop) {
                this.menuActiveMobile = false;
            }
        } else {
            this.menuActiveMobile = !this.menuActiveMobile;
            if (this.menuActiveMobile) {
                this.menuInactiveDesktop = false;
            }
        }

        if (this.topMenuActive) {
            this.hideTopMenu();
        }

        event.preventDefault();
    }

    toggleProfile(event: Event) {
        this.profileActive = !this.profileActive;
        event.preventDefault();
    }

    toggleTopMenu(event: Event) {
        this.topMenuButtonClick = true;
        this.menuActiveMobile = false;

        if (this.topMenuActive) {
            this.hideTopMenu();
        } else {
            this.topMenuActive = true;
        }

        event.preventDefault();
    }

    hideTopMenu() {
        this.topMenuLeaving = true;
        setTimeout(() => {
            this.topMenuActive = false;
            this.topMenuLeaving = false;
        }, 500);
    }

    onMenuClick() {
        this.menuClick = true;

        setTimeout(() => {
            this.scrollerViewChild.moveBar();
        }, 500);
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    ngOnDestroy() {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }



    deleteUser(id: number) {
        this.userService
            .delete(id)
            .pipe(first())
            .subscribe(() => {
                this.loadAllUsers();
            });
    }

    private loadAllUsers() {
        this.userService
            .getAll()
            .pipe(first())
            .subscribe(users => {
                this.users = users;
            });
    }
}
