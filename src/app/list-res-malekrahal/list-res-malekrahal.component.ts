import { Component, OnInit } from '@angular/core';

import { ResidenceService, Residence } from '../services/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listRes-malekrahal',
  templateUrl: './list-res-malekrahal.component.html',
})
export class ListResMalekrahalComponent implements OnInit {

  residences: Residence[] = [];

  constructor(
    private residenceService: ResidenceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.residenceService
      .getResidences()
      .subscribe(data => this.residences = data);
  }

  showDetails(id: number) {
    this.router.navigate(['/detail-residence', id]);
  }
}