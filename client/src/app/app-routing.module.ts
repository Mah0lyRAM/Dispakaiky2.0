import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DocteurComponent } from './components/docteur/docteur.component';
import { PatientsComponent } from './components/patient/patients/patients.component';
import { ConsultationsComponent } from './components/consultations/consultations.component';
import { ListePatientComponent } from './components/liste-patient/liste-patient.component';

const routes: Routes = [
  { path: "navigation", component: NavigationComponent },
  { path: "accueil", component: AccueilComponent },
  { path: "docteur", component: DocteurComponent },
  { path: "consultations", component: ConsultationsComponent },
  { path: "patients", component: PatientsComponent },
  { path: "liste", component: ListePatientComponent},
  { path: "**", component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
