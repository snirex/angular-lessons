import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from '../app/components/movies/movies.component';
import { MoviComponent } from '../app/components/movi/movi.component';

@NgModule({
  declarations: [
    // insert component shere
    AppComponent,
    MoviesComponent,
    MoviComponent,
  ],
  imports: [
    //here we should insert ONLY modules:
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
