import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PageHasilComponent } from './page-hasil/page-hasil.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PageHasilComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
