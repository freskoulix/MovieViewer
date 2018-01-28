import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as $ from 'jquery';
import * as _ from 'lodash';

import { AppService } from './services';
import { MostPopular } from './models/models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Movie Viewer';
  state: any = {
    page: 0,
    results: []
  };

  $loadMoreMovies: any;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.init();
  }

  ngAfterViewInit() {
    this.$loadMoreMovies = $('.load-more-movies');
    this.eventListeners();

  }

  init() {
    this.loadPage().then(() => {
      this.enableLoadMoreMovies();
    });
  }

  loadPage() {
    this.state.page++;

    return this.appService.mostPopular(this.state.page).then((response) => {
      if (response !== null) {
        this.storeApiResponse(response);
      }

      return Promise.resolve();
    });
  }

  eventListeners() {
    this.$loadMoreMovies.on('click', () => {
      this.disableLoadMoreMovies();
      this.loadPage().then(() => {
        this.enableLoadMoreMovies();
      });
    });
  }

  disableLoadMoreMovies() {
    this.$loadMoreMovies.addClass('disabled');
    this.$loadMoreMovies.find('.load-more-movies-text').addClass('hidden');
    this.$loadMoreMovies.find('.load-more-movies-spinner').removeClass('hidden');
  }

  enableLoadMoreMovies() {
    this.$loadMoreMovies.find('.load-more-movies-spinner').addClass('hidden');
    this.$loadMoreMovies.find('.load-more-movies-text').removeClass('hidden');
    this.$loadMoreMovies.removeClass('disabled');
  }

  storeApiResponse(response: any) {
    this.state.page = response.page;
    this.state.totalPages = response.totalPages;
    this.state.totalResults = response.totalResults;
    let results = this.convertResults(response.results);
    this.state.results = this.state.results.concat(results);
  }

  convertResults(results: any) {
    return _.map(results, (o) => {
      let keys = Object.keys(o);
      let out = {};
      keys.forEach((key) => {
        let camelCaseKey = _.camelCase(key);
        out[camelCaseKey] = o[key];
      });
      return out;
    });
  }
}
