import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { User } from 'src/app/services/authentication/temp-user';

@Component({
  selector: 'app-parental-header',
  templateUrl: './parental-header.component.html',
  styleUrls: ['./parental-header.component.css']
})
export class ParentalHeaderComponent {
    TITLE = 'Parent Portal';
    currentUser: User;

    constructor(private router: Router, private authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

}