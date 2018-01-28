import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'votes-gauge',
  templateUrl: './votesGauge.component.pug',
  styleUrls: ['./votesGauge.component.styl']
})
export class VotesGaugeComponent implements OnChanges {
  @Input() voteAverage: number = 0;

  state: any = [];

  votesRange = 10;
  starsNumber = 5;
  mapDelimiter;

  constructor() {
    this.mapDelimiter = this.votesRange / this.starsNumber;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.voteAverage) {
      return;
    }

    let value = changes.voteAverage.currentValue;
    let mappedValue = value / this.mapDelimiter;
    let integerPart = Math.floor(mappedValue);
    let decimalPart = mappedValue - integerPart;

    for (let i = 0; i < this.starsNumber; i++) {
      if (i < integerPart) {
        this.state.push('fa-star');
        continue;
      } else if (i >= integerPart && decimalPart > 0) {
        this.state.push('fa-star-half-empty');
        decimalPart = null;
        continue;
      }

      this.state.push('fa-star-o');
    }
  }
}
