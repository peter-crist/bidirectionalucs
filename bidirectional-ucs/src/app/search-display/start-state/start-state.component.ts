import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-state',
  templateUrl: './start-state.component.html',
  styleUrls: ['./start-state.component.css']
})
export class StartStateComponent implements OnInit {
  public currentlySelecting: string = null;

  @Input('startState') startState: string;
  @Input('currentlySelecting') set setCurrentlySelectingValue(value) {
    this.currentlySelecting = value;
  }
  @Output() currentlySelectingChange: EventEmitter<String> = new EventEmitter<String>()

  constructor() { }

  ngOnInit() { }

  enableSelectStart(): void {
    this.currentlySelecting = "start";
    this.currentlySelectingChange.emit(this.currentlySelecting);
  }

  clearStartState(): void {
    this.startState = null;
    this.currentlySelecting = '';
    this.currentlySelectingChange.emit(this.currentlySelecting);
  }
}
