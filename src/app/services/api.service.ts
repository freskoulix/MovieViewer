import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { configApi } from '../config/api';


@Injectable()
export default class ApiService {
  constructor(private http: Http) {}

  /**
   *
   */
  mostPopular(page) {
    let url = ApiService.generateApiUrl(page);

    return this.api(url).then((response) => {
      return Promise.resolve(response);
    }).catch((error) => {
      return Promise.reject(error);
    });
  }

  /**
   *
   */
  private static generateApiUrl(page) {
    return configApi.URL.BASE
            + configApi.URL.MOST_POPULAR
            + '?api_key='
            + configApi.API_KEY
            + '&' + configApi.URL.MOST_POPULAR_OPTIONS
            + '&page=' + page;
  }

  /**
   *
   */
  private api(url: string) {
    return this.http.get(url).toPromise();
  }
}
