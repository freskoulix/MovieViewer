import { Injectable } from '@angular/core';

import ApiService from './api.service';


@Injectable()
export default class AppService {
  constructor(private apiService: ApiService) {}

  /**
   * Fetches most popular movies and resolves its response
   */
  mostPopular(page) {
    return this.apiService.mostPopular(page).then((response) => {
      const body = this.parseApiResponse(response);
      return Promise.resolve(body);
    }).catch((error) => {
      return Promise.reject(error);
    });
  }

  /**
   * Tries to parse an API response, returns null in case of failure
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
