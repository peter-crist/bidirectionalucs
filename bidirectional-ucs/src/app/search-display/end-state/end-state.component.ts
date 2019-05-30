import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-end-state',
  templateUrl: './end-state.component.html',
  styleUrls: ['./end-state.component.css']
})
export class EndStateComponent implements OnInit {
  public currentlySelecting: string = null;

  @Input('endState') endState: string;
  @Input('currentlySelecting') set setCurrentlySelectingValue(value) {
    this.currentlySelecting = value;
  }
  @Output() currentlySelectingChange: EventEmitter<String> = new EventEmitter<String>()

  constructor() { }

  ngOnInit() { }

  enableSelectEnd(): void {
    this.currentlySelecting = "end";
    this.currentlySelectingChange.emit(this.currentlySelecting);
  }

  clearEndState(): void {
    this.endState = null;
    this.currentlySelecting = '';
    this.currentlySelectingChange.emit(this.currentlySelecting);
  }
}
