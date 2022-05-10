import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';


import { HttpClientModule } from '@angular/common/http';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { TarjetaCreditoComponent } from './components/components/tarjeta-credito/tarjeta-credito.component';

import { HijoEjemploComponent } from './components/hijo-ejemplo/hijo-ejemplo.component';


@NgModule({
  declarations: [
    AppComponent,
    TarjetaCreditoComponent,
    HijoEjemploComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,

    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
