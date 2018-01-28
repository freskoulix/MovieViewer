import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiService, AppService } from './services';
import {
  MovieInfoComponent,
  MoviesListComponent,
  VotesGaugeComponent
} from './components';


@NgModule({
  declarations: [
    AppComponent,
    MovieInfoComponent,
    MoviesListComponent,
    VotesGaugeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    AppService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
