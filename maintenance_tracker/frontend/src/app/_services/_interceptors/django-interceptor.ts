import {Injectable, isDevMode} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {environment} from '../../../environments/environment'
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class DjangoInterceptor implements HttpInterceptor {
    constructor(private cookieService: CookieService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let headersList: any = {'Content-Type': 'application/json'};

        if (isDevMode() && !environment.test_login) {
            // Dev mode, add the Authorization Token if provided
            /* tslint:disable-next-line */ // Disabled by johifts, need dynamic object for this fn
            headersList['Authorization'] = `Token ${environment.token}`;
        }
        // CSRF token is needed to make API calls work when logged in
        let csrf = this.cookieService.get('csrftoken');
        // the Angular HttpHeaders class throws an exception if any of the values are undefined
        if (typeof (csrf) === 'undefined') {
            csrf = '';
        }
        if (csrf !== '') {
            headersList['X-CSRFToken'] = csrf;
        }

        // Clone the request with the new headers
        const updatedReq = req.clone({setHeaders: headersList, withCredentials: true});

        // Allow the request to execute normally, and intercept before return to client
        return next.handle(updatedReq);
    }
}