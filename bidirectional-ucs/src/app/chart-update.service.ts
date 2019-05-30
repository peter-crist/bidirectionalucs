import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartUpdateService {

  public selectedState = new BehaviorSubject<string>(null);
  public selectedState$ = this.selectedState.asObservable();
  constructor() { }

  updateState(stateId: string) {
    this.selectedState.next(stateId);
  }
}
