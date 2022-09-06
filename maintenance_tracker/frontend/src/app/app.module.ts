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
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    //PrimeNG
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
