import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {PoliticalComponent} from './maps/political/political.component';
import {FormsModule} from '@angular/forms';
import {PinchZoomModule} from 'ngx-pinch-zoom';
import {ImageDrawingModule} from 'ngx-image-drawing';
import {LargestStatesComponent} from './maps/largest-states/largest-states.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import {CountriesTypesComponent} from './maps/countries-types/countries-types.component';
import {HistoricalAreasComponent} from './maps/historical-areas/historical-areas.component';
import {FrgComponent} from './maps/frg/frg.component';
import {FranceComponent} from './maps/france/france.component';
import {GreatBritainComponent} from './maps/great-britain/great-britain.component';
import {ItalyComponent} from './maps/italy/italy.component';
import {RussiaComponent} from './maps/russia/russia.component';
import {UkraineComponent} from './maps/ukraine/ukraine.component';
import {PolandComponent} from './maps/poland/poland.component';
import {KazakhstanComponent} from './maps/kazakhstan/kazakhstan.component';
import {PoliticalStagesComponent} from './maps/political-stages/political-stages.component';
import {UsaComponent} from './maps/usa/usa.component';

// определение маршрутов
const appRoutes: Routes = [
  {path: '', component: MainScreenComponent},
  {path: 'maps', component: MainScreenComponent},
  {path: 'maps/political', component: PoliticalComponent},
  {path: 'maps/largest-states', component: LargestStatesComponent},
  {path: 'maps/political-stages', component: PoliticalStagesComponent},
  {path: 'maps/countries-types', component: CountriesTypesComponent},
  {path: 'maps/historical-areas', component: HistoricalAreasComponent},
  {path: 'maps/frg', component: FrgComponent},
  {path: 'maps/france', component: FranceComponent},
  {path: 'maps/great-britain', component: GreatBritainComponent},
  {path: 'maps/italy', component: ItalyComponent},
  {path: 'maps/russia', component: RussiaComponent},
  {path: 'maps/ukraine', component: UkraineComponent},
  {path: 'maps/poland', component: PolandComponent},
  {path: 'maps/kazakhstan', component: KazakhstanComponent},
  {path: 'maps/usa', component: UsaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PoliticalComponent,
    LargestStatesComponent,
    HeaderComponent,
    MainScreenComponent,
    CountriesTypesComponent,
    HistoricalAreasComponent,
    FrgComponent,
    FranceComponent,
    GreatBritainComponent,
    ItalyComponent,
    RussiaComponent,
    UkraineComponent,
    PolandComponent,
    KazakhstanComponent,
    PoliticalStagesComponent,
    UsaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PinchZoomModule,
    ImageDrawingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
