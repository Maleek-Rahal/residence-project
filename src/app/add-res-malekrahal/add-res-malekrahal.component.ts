import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResidenceService, Residence } from '../services/residence.service';



@Component({
  selector: 'app-add-res-malekrahal',
  templateUrl: './add-res-malekrahal.component.html',
})
export class AddResMalekrahalComponent {

  residence: Residence = {
    name: '',
    address: '',
    image: '',
    status: 'Disponible'
  };

  constructor(
    private residenceService: ResidenceService,
    private router: Router
  ) {}

  addResidence() {
    this.residenceService.addResidence(this.residence).subscribe({
      next: () => this.router.navigate(['/list-residences'])
      
    });
  
  }
}