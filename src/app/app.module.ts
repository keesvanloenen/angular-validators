import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MultipleFieldsComponent } from './multiple-fields/multiple-fields.component';
import { AsyncComponent } from './async/async.component';
import { ForbidComponent } from './forbid/forbid.component';


@NgModule({
  declarations: [
    AppComponent,
    MultipleFieldsComponent,
    AsyncComponent,
    ForbidComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
