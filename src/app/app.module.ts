import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {PoliticalComponent} from './maps/political/political.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PinchZoomModule} from 'ngx-pinch-zoom';
import {ImageDrawingModule} from 'ngx-image-drawing';
import {LargestStatesComponent} from './maps/largest-states/largest-states.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {MainScreenComponent} from './main-screen/main-screen.component';
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
import {MapsListComponent} from './maps-list/maps-list.component';
import {InternationalOrganizationComponent} from './maps/international-organization/international-organization.component';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './auth.guard';


// определение маршрутов
const appRoutes: Routes = [
  {path: '', component: LoginComponent},

  {path: 'maps', component: MainScreenComponent, canActivate: [AuthGuard]},
  {path: 'maps/political', component: PoliticalComponent, canActivate: [AuthGuard]},
  {path: 'maps/largest-states', component: LargestStatesComponent, canActivate: [AuthGuard]},
  {path: 'maps/political-stages', component: PoliticalStagesComponent, canActivate: [AuthGuard]},
  {path: 'maps/countries-types', component: CountriesTypesComponent, canActivate: [AuthGuard]},
  {path: 'maps/historical-areas', component: HistoricalAreasComponent, canActivate: [AuthGuard]},
  {path: 'maps/frg', component: FrgComponent, canActivate: [AuthGuard]},
  {path: 'maps/france', component: FranceComponent, canActivate: [AuthGuard]},
  {path: 'maps/great-britain', component: GreatBritainComponent, canActivate: [AuthGuard]},
  {path: 'maps/italy', component: ItalyComponent, canActivate: [AuthGuard]},
  {path: 'maps/russia', component: RussiaComponent, canActivate: [AuthGuard]},
  {path: 'maps/ukraine', component: UkraineComponent, canActivate: [AuthGuard]},
  {path: 'maps/poland', component: PolandComponent, canActivate: [AuthGuard]},
  {path: 'maps/kazakhstan', component: KazakhstanComponent, canActivate: [AuthGuard]},
  {path: 'maps/usa', component: UsaComponent, canActivate: [AuthGuard]},
  {path: 'maps/international-organization', component: InternationalOrganizationComponent, canActivate: [AuthGuard]},

  {path: '**', redirectTo: ''}
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
    UsaComponent,
    MapsListComponent,
    InternationalOrganizationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PinchZoomModule,
    ImageDrawingModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
