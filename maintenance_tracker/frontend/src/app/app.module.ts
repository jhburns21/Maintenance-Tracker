import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './framework/sidebar/sidebar.component';
import { FooterComponent } from './framework/footer/footer.component';
import { MainComponent } from './framework/main/main.component';
import { HeaderComponent } from './framework/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// primeNG
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { CurrencyPipe, DatePipe, DecimalPipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DjangoInterceptor } from './_services/_interceptors/django-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    //PrimeNG
    ButtonModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {provide: HTTP_INTERCEPTORS, useClass: DjangoInterceptor, multi: true},
    DatePipe, DecimalPipe, CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
