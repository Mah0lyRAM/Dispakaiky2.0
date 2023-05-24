import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private router: Router) {}

  accueil() {
    this.router.navigateByUrl('accueil');
  }

  docteur() {
    this.router.navigateByUrl('docteur');
  }

  patients() {
    this.router.navigateByUrl('patients');
  }
  
  consultations() {
    this.router.navigateByUrl('consultations');
  }

  liste() {
    this.router.navigateByUrl('liste');
  }
}
