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
import { LoginComponent } from './login/login.component';
import { CurrencyPipe, DatePipe, DecimalPipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DjangoInterceptor } from './_services/_interceptors/django-interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// primeNG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext'
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MaintenanceRecordComponent } from './maintenance-record/maintenance-record.component';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MainetenanceVehiclesComponent } from './mainetenance-vehicles/mainetenance-vehicles.component';
import { MaintenanceRecordsComponent } from './maintenance-records/maintenance-records.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    LoginComponent,
    MaintenanceRecordComponent,
    VehicleTypesComponent,
    VehiclesComponent,
    MainetenanceVehiclesComponent,
    MaintenanceRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //PrimeNG
    ButtonModule,
    InputTextModule,
    ToastModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {provide: HTTP_INTERCEPTORS, useClass: DjangoInterceptor, multi: true},
    DatePipe, DecimalPipe, CurrencyPipe, MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
