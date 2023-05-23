import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { DocteurComponent } from './components/docteur/docteur.component';
import { PatientsComponent } from './components/patient/patients/patients.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConsultationsComponent } from './components/consultations/consultations.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AccueilComponent,
    DocteurComponent,
    PatientsComponent,
    ContactComponent,
    ConsultationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
