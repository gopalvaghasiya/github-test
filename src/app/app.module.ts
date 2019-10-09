import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponantComponent } from './test-componant/test-componant.component';
import { GopalcompnantComponent } from './gopalcompnant/gopalcompnant.component';
import { GopalcomponantComponent } from './gopalcomponant/gopalcomponant.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponantComponent,
    GopalcompnantComponent,
    GopalcomponantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
