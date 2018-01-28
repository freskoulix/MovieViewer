import { Injectable } from '@angular/core';

import ApiService from './api.service';


@Injectable()
export default class AppService {
  constructor(private apiService: ApiService) {}

  /**
   *
   */
  mostPopular(page) {
    return this.apiService.mostPopular(page).then((response) => {
      let body = this.parseApiResponse(response);
      return Promise.resolve(body);
    }).catch((error) => {
      return Promise.reject(error);
    });
  }

  /**
   *
   */
  parseApiResponse(response: object) {
    let body = null;

    if (response['ok']) {
      try {
        body = JSON.parse(response['_body']);
      } catch (error) {
        console.error('Error parsing API response:', error);
      }
    }

    return body;
  }
}
