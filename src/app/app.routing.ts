import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
   
    {path: '', component:AppComponent},
    {path: 'dashboard', component: DashboardComponent} 
   
    ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);