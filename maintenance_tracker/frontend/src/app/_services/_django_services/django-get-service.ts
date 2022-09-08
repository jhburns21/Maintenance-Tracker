import {Injectable} from '@angular/core';
import {DjangoService} from './django-service';
import {Observable} from 'rxjs';
import {QueryStringBuilder} from '../../_utils/query-string-builder';
import {QueryParameters} from '../../_utils/query-parameters';

@Injectable({providedIn: 'root'})
export class DjangoGetService<TModel> extends DjangoService {
  baseGetUrl = `Set Url before use!`;

  urlHandler(objectID?: string, params?: QueryParameters) {
    let url = `${this.baseGetUrl}`;

    if (objectID && objectID !== '') {
      url += objectID + '/';
    }

    // serialize parameters if any were provided
    if (params && Array.isArray(params) && params.length > 0) {
      const paramsSerializer = new QueryStringBuilder(params);
      url = `${url}${paramsSerializer.build()}`;
    } else if (params) {
      // handle a simple object/dictionary
      const paramsList = [];
      for (const key of Object.keys(params)) {
        const value = params[key];
        if (value !== null && typeof value !== 'undefined' && value !== '') {
          paramsList.push({key, value});
        }
      }

      if (paramsList.length === 0) { return url; }

      const paramsSerializer = new QueryStringBuilder(paramsList);
      url = `${url}${paramsSerializer.build()}`;
    }

    return url;
  }

  get(params?: QueryParameters, objectID = '', message: string = 'Get data'): Observable<TModel[]> {
    return this.http.get<TModel[]>(this.urlHandler(objectID, params), this.httpOptions);
  }

  getObject(objectID: string, params?: QueryParameters, message: string = 'Get data'): Observable<TModel> {
    return this.http.get<TModel>(this.urlHandler(objectID, params), this.httpOptions);
  }
}