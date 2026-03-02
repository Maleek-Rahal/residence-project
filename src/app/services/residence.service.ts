// src/app/services/residence.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface de la résidence
export interface Residence {
  id?: number;
  name: string;
  address: string;
  image: string;
  status: string; // 'Disponible' ou 'Non disponible'
}

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  // URL de ton backend
  private apiUrl = 'http://localhost:3000/residences';

  constructor(private http: HttpClient) {}

  // 1️⃣ Récupérer toutes les résidences
  getResidences(): Observable<Residence[]> {
    return this.http.get<Residence[]>(this.apiUrl);
  }

  // 2️⃣ Récupérer une résidence par id
  getResidence(id: number): Observable<Residence> {
    return this.http.get<Residence>(`${this.apiUrl}/${id}`);
  }

  // 3️⃣ Ajouter une résidence
  addResidence(residence: Residence): Observable<Residence> {
    return this.http.post<Residence>(this.apiUrl, residence);
  }

  // 4️⃣ Supprimer une résidence
  deleteResidence(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // 5️⃣ (Optionnel) Mettre à jour une résidence
  updateResidence(residence: Residence): Observable<Residence> {
    return this.http.put<Residence>(`${this.apiUrl}/${residence.id}`, residence);
  }
}