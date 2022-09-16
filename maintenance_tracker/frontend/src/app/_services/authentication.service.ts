import {Injectable, isDevMode} from '@angular/core';
import {DjangoService} from '../_services/_django_services/django-service';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {LoginData} from '../_models/_custom_models/login-data';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService extends DjangoService {

    public login(loginData: LoginData): Observable<any> {
        return this.http.post(`${this.url}core_authentication/login/`, loginData, this.httpOptions);
    }

    public is_authenticated(): Observable<boolean> {
        if (isDevMode() && !environment.test_login) {
            console.log('Dev mode detected.');
            if (this.httpOptions.headers.get('Authorization')!.length > 0) {
                console.log('Token set by environment. User is "Logged in"');
                return of<boolean>(true);
            }
        } else {
            return this.http.get<any>(`${this.url}core_authentication/check_auth/`, this.httpOptions).pipe(
                map(x => x.is_authenticated)
            );
        }
        return of<boolean>(false);
    }

    public logout(): Observable<any> {
        return this.http.post(`${this.url}core_authentication/logout/`, {}, this.httpOptions);
    }
}
