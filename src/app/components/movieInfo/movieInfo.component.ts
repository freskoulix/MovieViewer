import { Component, Input } from '@angular/core';

import { configApi } from '../../config/api'

import * as $ from 'jquery';


@Component({
  selector: 'movie-info',
  templateUrl: './movieInfo.component.pug',
  styleUrls: ['./movieInfo.component.styl']
})
export class MovieInfoComponent {
  @Input() state: any = {};

  baseUrl = configApi.URL.POSTERS;

  movieImageClickOperation = 'enlarge';

  constructor() {}

  movieImageClickHandler(event) {
    let $target = $(event.target).closest('.movie-image-container');

    if ($target.hasClass('big')) {
      this.movieImageClickOperation = 'enlarge';
      $target.removeClass('big');
      return;
    }

    this.movieImageClickOperation = 'shrink';
    $target.addClass('big');
  }
}
