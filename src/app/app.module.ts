import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule, CORE_CONFIG } from 'projects/core/src/projects';
import { CoreConfigFactory } from './domain/services/config-factories/core-config.factory';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, FooterComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    CommonModule
  ],
  providers: [{ provide: CORE_CONFIG, useFactory: CoreConfigFactory }],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
