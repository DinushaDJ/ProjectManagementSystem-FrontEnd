import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private user: any;

    _registerUrl = 'http://localhost:3000/login';

    constructor(private http: HttpClient) {
    }

    loginUser(user) {
        return this.http.post<any>(this._registerUrl, user);
    }

    setUser(user) {
        this.user = user;

        delete this.user.password;

        localStorage.setItem('user', JSON.stringify(this.user));
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}
