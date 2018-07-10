import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginUserData = {};

    constructor(private auth: AuthService,
                private _router: Router,
                private flash: FlashMessagesService) {
    }

    ngOnInit() {
    }

    loginUser() {
        // console.log(this.loginUserData);

        this.auth.loginUser(this.loginUserData)
            .subscribe(res => {
                    console.log(res);
                    // this.auth.setToken(res.token);
                    this.auth.setUser(res.user);
                    this._router.navigate(['projects']);
                }, err => {
                    console.log(err);

                    this.flash.show(err.error.message, {cssClass: 'alert alert-danger', timeout: 3000});
                }
            );
    }
}
