import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './app.routing';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    
    
    
    
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    routing,
    LoginModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
