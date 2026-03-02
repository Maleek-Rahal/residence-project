import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService, Residence } from '../services/residence.service';


@Component({
  selector: 'app-detail-res-malekrahal',
  templateUrl: './detail-res-malekrahal.component.html',
})
export class DetailResMalekrahalComponent implements OnInit {

  residence!: Residence;

  constructor(
    private route: ActivatedRoute,
    private residenceService: ResidenceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.residenceService
      .getResidence(id)
      .subscribe(data => this.residence = data);
  }

  deleteResidence() {
    if (confirm('Voulez-vous vraiment supprimer cette résidence ?')) {
      this.residenceService
        .deleteResidence(this.residence.id!)
        .subscribe(() => {
          this.router.navigate(['/list-residences']);
        });
    }
  }
}