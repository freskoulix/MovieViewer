import { Component, Input } from '@angular/core';

import 'popper.js';
import 'bootstrap';


@Component({
  selector: 'app-movies-list',
  templateUrl: './moviesList.component.pug',
  styleUrls: ['./moviesList.component.styl']
})
export class MoviesListComponent {
  @Input() state: any = [];

  constructor() {}
}
