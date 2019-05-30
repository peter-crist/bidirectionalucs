import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartUpdateService } from '../chart-update.service';
import { Subscription } from 'rxjs';
import { StartStateComponent } from './start-state/start-state.component';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {
  public startState: string = null;
  public endState: string = null;
  private _selectedStateSubscription: Subscription;
  public currentlySelecting: string = null;

  constructor(private chartUpdateService: ChartUpdateService) { }

  ngOnInit() {
    this._selectedStateSubscription = this.chartUpdateService.selectedState$.subscribe(_stateId => {
      if (this.currentlySelecting == 'start') {
        this.startState = _stateId;
        this.currentlySelecting = '';
      }
      if (this.currentlySelecting == 'end') {
        this.endState = _stateId;
        this.currentlySelecting = '';
      }
    });
  }

  ngOnDestroy(): void {
    this._selectedStateSubscription.unsubscribe();
  }

  enableSelectEnd(): void {
    this.currentlySelecting = "end"
  }
}
