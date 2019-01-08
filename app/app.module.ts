import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {enviroment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
export const firebaseConfig=enviroment.firebaseConfig;

import {AgmCoreModule} from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey:enviroment.googleMapsKey
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
