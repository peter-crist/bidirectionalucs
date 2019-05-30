import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { SearchDisplayComponent } from './search-display/search-display.component';
import { ChartUpdateService } from './chart-update.service';
import { StartStateComponent } from './search-display/start-state/start-state.component';
import { EndStateComponent } from './search-display/end-state/end-state.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@NgModule({
   declarations: [
      AppComponent,
      BarChartComponent,
      SearchDisplayComponent,
      StartStateComponent,
      EndStateComponent
   ],
   imports: [
      BrowserModule,
      FontAwesomeModule
   ],
   providers: [ChartUpdateService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
   constructor() {
      library.add(faTimes);
   }
 }
