import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavAreaComponent } from './nav-area/nav-area.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavAreaComponent,
    FooterAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
